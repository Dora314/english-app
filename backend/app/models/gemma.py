from llama_cpp import Llama  # Replaces transformers
from typing import List, Dict
import json
from functools import lru_cache
import re
import os

class GemmaModel:
    _instance = None
    _max_retries = 3  # Maximum number of retries for generating questions
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(GemmaModel, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance
    
    def __init__(self):
        if self._initialized:
            return
            
        # Initialize the GGUF model and tokenizer using llama-cpp-python
        self.model_repo_id = "google/gemma-3-1b-it-qat-q4_0-gguf" 
        self.model_filename = "gemma-3-1b-it-q4_0.gguf" # Corrected filename

        try:
            # Load model using Llama.from_pretrained
            # This will download the model from Hugging Face Hub if not cached
            self.model = Llama.from_pretrained(
                repo_id=self.model_repo_id,
                filename=self.model_filename,
                n_ctx=8192,  # Context window size (Gemma models typically support 8k)
                n_gpu_layers=0,  # Force CPU usage
                verbose=False  # Set to True for detailed logging during model load
            )
        except Exception as e:
            print(f"Error initializing Llama model: {e}")
            # Consider how to handle model loading failure, e.g., re-raise
            # This makes the application aware that the model isn't available.
            raise RuntimeError(f"Could not initialize GemmaModel with GGUF model {self.model_repo_id}/{self.model_filename}: {e}") from e
        
        self._initialized = True
    
    def generate_mcq_prompt(self, topic: str, num_questions: int) -> str:
        # Highly simplified prompt for JSON output only
        return f"""
Generate a JSON array with exactly {num_questions} multiple choice questions about the English grammar topic '{topic}'.
Each item must be an object with keys: "question", "answer", "option1", "option2", "option3", "option4".
Questions must end with a question mark and all options and the answer must end with a period.
Return only the JSON array, with no additional text or formatting.
"""

    @lru_cache(maxsize=100)
    def generate(self, prompt: str, max_tokens: int = 2048) -> str:
        # Generation parameters for llama-cpp-python
        temperature = 0.7
        top_p = 0.8
        top_k = 20
        
        # Generate text without additional stop tokens to allow full JSON completion
        completion = self.model(
            prompt,
            max_tokens=max_tokens,
            temperature=temperature,
            top_p=top_p,
            top_k=top_k,
            echo=False
        )
        raw_text = completion['choices'][0]['text']
        print(f"Raw generated text: {raw_text}")
        return raw_text.strip()
    
    def clean_json_response(self, response: str) -> str:
        # Remove any non-JSON content
        response = '\n'.join(line for line in response.split('\n') 
                           if not any(line.strip().startswith(x) for x in 
                                    ['Please', 'I need', 'I will', 'Here', 'Let me', 'First', 'Now', 'Then',
                                     'This', 'The', 'To', 'And', 'For', 'With', 'In', 'On', 'At', 'By',
                                     'json', 'JSON', '```', '---', '***', '___']))
        
        # Find the first complete JSON array
        start = response.find('[')
        if start == -1:
            return ""
        
        # Find matching closing bracket
        bracket_count = 1
        end = start + 1
        while bracket_count > 0 and end < len(response):
            if response[end] == '[':
                bracket_count += 1
            elif response[end] == ']':
                bracket_count -= 1
            end += 1
        
        if bracket_count != 0:
            return ""
        
        json_str = response[start:end]
        
        # Clean up JSON formatting
        json_str = json_str.replace('\n', ' ').replace('\r', '')
        json_str = json_str.replace('\\"', '"')  # Remove escaped quotes
        json_str = json_str.replace('""', '"')   # Fix double quotes
        json_str = json_str.replace(',]', ']')   # Remove trailing commas
        json_str = json_str.replace(',}', '}')   # Remove trailing commas in objects
        
        return json_str
    
    def validate_question(self, question: Dict, existing_questions: List[Dict] = None) -> bool:
        if existing_questions is None:
            existing_questions = []
            
        required_fields = ["question", "answer", "option1", "option2", "option3", "option4"]
        if not all(field in question for field in required_fields):
            print("Missing required fields")
            return False
        
        # Check for empty fields
        if any(not question[field] for field in required_fields):
            print("Empty field found")
            return False
        
        # Validate question format
        if not question["question"].endswith('?'):
            print("Question must end with a question mark")
            return False
        
        # Validate options format
        options = [question["option1"], question["option2"], question["option3"], question["option4"]]
        if not all(opt.endswith('.') for opt in options):
            print("Options must end with a period")
            return False
        
        # Check for duplicate options
        if len(set(options)) != len(options):
            print("Duplicate options found")
            return False
        
        # Validate answer matches an option exactly
        if question["answer"] not in options:
            print("Answer must match an option exactly")
            return False
        
        # Check for duplicate questions
        if any(q["question"] == question["question"] for q in existing_questions):
            print("Duplicate question found")
            return False
        
        return True
    
    def parse_mcq_response(self, response: str, num_questions: int, topic: str, retry_count: int = 0, existing_questions: List[Dict] = None) -> List[Dict]:
        if existing_questions is None:
            existing_questions = []
            
        if retry_count >= self._max_retries:
            print(f"Maximum retries ({self._max_retries}) reached")
            return existing_questions
            
        try:
            print(f"Raw response: {response}")
            
            # Clean the response
            json_str = self.clean_json_response(response)
            if not json_str:
                print("No valid JSON found in response")
                return existing_questions
            
            print(f"Cleaned JSON: {json_str}")
            
            try:
                questions = json.loads(json_str)
                if not isinstance(questions, list):
                    print("Response is not a JSON array")
                    return existing_questions
                
                # Validate each question
                valid_questions = []
                for q in questions:
                    if self.validate_question(q, existing_questions + valid_questions):
                        valid_questions.append(q)
                
                all_questions = existing_questions + valid_questions
                
                if len(all_questions) != num_questions:
                    print(f"Expected {num_questions} questions, got {len(all_questions)}")
                    # Try to generate more questions if we don't have enough
                    if len(all_questions) < num_questions:
                        remaining = num_questions - len(all_questions)
                        print(f"Generating {remaining} more questions...")
                        more_questions = self.generate_mcqs(topic, remaining, retry_count + 1, all_questions)
                        if more_questions:
                            all_questions.extend(more_questions)
                
                return all_questions[:num_questions]  # Ensure we return exactly num_questions
                
            except json.JSONDecodeError as e:
                print(f"JSON decode error: {e}")
                return existing_questions
            
        except Exception as e:
            print(f"Error parsing MCQ response: {e}")
            return existing_questions
    
    def generate_single_mcq(self, topic: str) -> Dict:
        """
        Generate exactly one MCQ object as JSON for the given topic.
        Returns a dict with keys: question, answer, option1,...option4.
        """
        single_prompt = f'''Generate a single multiple choice question (MCQ) about the English grammar topic "{topic}" in valid JSON format.\nReturn only one JSON object with these keys: "question", "answer", "option1", "option2", "option3", "option4".\nAll values must be complete English sentences.\nDo NOT include any array brackets or additional text.'''        
        raw = self.generate(single_prompt, max_tokens=512)
        obj = None
        try:
            obj = json.loads(raw)
        except json.JSONDecodeError:
            # fallback: clean and retry
            cleaned = self.clean_json_response(raw)
            try:
                obj = json.loads(cleaned)
            except:
                return {}
        return obj if isinstance(obj, dict) else {}

    def generate_mcqs(self, topic: str, num_questions: int, retry_count: int = 0, existing_questions: List[Dict] = None) -> List[Dict]:
        # Generate MCQs one-by-one for better JSON reliability
        questions: List[Dict] = existing_questions or []
        attempts = 0
        while len(questions) < num_questions and attempts < self._max_retries * num_questions:
            attempts += 1
            single = self.generate_single_mcq(topic)
            if single and self.validate_question(single, questions):
                questions.append(single)
        return questions[:num_questions]