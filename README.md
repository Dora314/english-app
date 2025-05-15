# How do i run this project

npm install

# Add .env
API_URL="http://localhost:3000"<br>
NODE_ENV="development"<br>
GEMINI_API_KEY="get_in_aistudio"<br>
NEXTAUTH_SECRET="random_secret_key_here"<br>
NEXTAUTH_URL="http://localhost:3000"<br>
GOOGLE_CLIENT_ID="(get from google console Oauth2 client it and add http://localhost:3000/api/auth/callback/google to authorize redirect urls)"<br>
GOOGLE_CLIENT_SECRET="(get from google console Oauth2 client secret)"<br>
DATABASE_URL="mysql://(user):(password)@localhost:3306/(database name)"<br>

# Remove folder prisma/migration

npx prisma migrate dev --name init<br>
npx prisma db pull<br>
npx prisma generate<br>

# Run

npm run dev<br>
Lưu ý: Khi đăng nhập, phải sử dụng tài khoản Google trùng với tài khoản đã lấy GOOGLE_CLIENT_ID trước đó.<br>
Warning: Using the login Google account same as the creating GOOGLE_CLIENT_ID account.
