
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserAnswer
 * 
 */
export type UserAnswer = $Result.DefaultSelection<Prisma.$UserAnswerPayload>
/**
 * Model UserWrongdoingQuestion
 * 
 */
export type UserWrongdoingQuestion = $Result.DefaultSelection<Prisma.$UserWrongdoingQuestionPayload>
/**
 * Model UserDashboardData
 * 
 */
export type UserDashboardData = $Result.DefaultSelection<Prisma.$UserDashboardDataPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAnswer`: Exposes CRUD operations for the **UserAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAnswers
    * const userAnswers = await prisma.userAnswer.findMany()
    * ```
    */
  get userAnswer(): Prisma.UserAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWrongdoingQuestion`: Exposes CRUD operations for the **UserWrongdoingQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWrongdoingQuestions
    * const userWrongdoingQuestions = await prisma.userWrongdoingQuestion.findMany()
    * ```
    */
  get userWrongdoingQuestion(): Prisma.UserWrongdoingQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDashboardData`: Exposes CRUD operations for the **UserDashboardData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDashboardData
    * const userDashboardData = await prisma.userDashboardData.findMany()
    * ```
    */
  get userDashboardData(): Prisma.UserDashboardDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserAnswer: 'UserAnswer',
    UserWrongdoingQuestion: 'UserWrongdoingQuestion',
    UserDashboardData: 'UserDashboardData',
    Question: 'Question'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userAnswer" | "userWrongdoingQuestion" | "userDashboardData" | "question"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserAnswer: {
        payload: Prisma.$UserAnswerPayload<ExtArgs>
        fields: Prisma.UserAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          findMany: {
            args: Prisma.UserAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          create: {
            args: Prisma.UserAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          createMany: {
            args: Prisma.UserAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          update: {
            args: Prisma.UserAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAnswer>
          }
          groupBy: {
            args: Prisma.UserAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserAnswerCountAggregateOutputType> | number
          }
        }
      }
      UserWrongdoingQuestion: {
        payload: Prisma.$UserWrongdoingQuestionPayload<ExtArgs>
        fields: Prisma.UserWrongdoingQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWrongdoingQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWrongdoingQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          findFirst: {
            args: Prisma.UserWrongdoingQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWrongdoingQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          findMany: {
            args: Prisma.UserWrongdoingQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>[]
          }
          create: {
            args: Prisma.UserWrongdoingQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          createMany: {
            args: Prisma.UserWrongdoingQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWrongdoingQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>[]
          }
          delete: {
            args: Prisma.UserWrongdoingQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          update: {
            args: Prisma.UserWrongdoingQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          deleteMany: {
            args: Prisma.UserWrongdoingQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWrongdoingQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWrongdoingQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>[]
          }
          upsert: {
            args: Prisma.UserWrongdoingQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWrongdoingQuestionPayload>
          }
          aggregate: {
            args: Prisma.UserWrongdoingQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWrongdoingQuestion>
          }
          groupBy: {
            args: Prisma.UserWrongdoingQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWrongdoingQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWrongdoingQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<UserWrongdoingQuestionCountAggregateOutputType> | number
          }
        }
      }
      UserDashboardData: {
        payload: Prisma.$UserDashboardDataPayload<ExtArgs>
        fields: Prisma.UserDashboardDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDashboardDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDashboardDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          findFirst: {
            args: Prisma.UserDashboardDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDashboardDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          findMany: {
            args: Prisma.UserDashboardDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>[]
          }
          create: {
            args: Prisma.UserDashboardDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          createMany: {
            args: Prisma.UserDashboardDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDashboardDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>[]
          }
          delete: {
            args: Prisma.UserDashboardDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          update: {
            args: Prisma.UserDashboardDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          deleteMany: {
            args: Prisma.UserDashboardDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDashboardDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDashboardDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>[]
          }
          upsert: {
            args: Prisma.UserDashboardDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDashboardDataPayload>
          }
          aggregate: {
            args: Prisma.UserDashboardDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDashboardData>
          }
          groupBy: {
            args: Prisma.UserDashboardDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDashboardDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDashboardDataCountArgs<ExtArgs>
            result: $Utils.Optional<UserDashboardDataCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userAnswer?: UserAnswerOmit
    userWrongdoingQuestion?: UserWrongdoingQuestionOmit
    userDashboardData?: UserDashboardDataOmit
    question?: QuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    answers: number
    wrongQuestions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UserCountOutputTypeCountAnswersArgs
    wrongQuestions?: boolean | UserCountOutputTypeCountWrongQuestionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWrongQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWrongdoingQuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    wrongAnswers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    wrongAnswers?: boolean | QuestionCountOutputTypeCountWrongAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountWrongAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWrongdoingQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    answers?: boolean | User$answersArgs<ExtArgs>
    wrongQuestions?: boolean | User$wrongQuestionsArgs<ExtArgs>
    dashboard?: boolean | User$dashboardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | User$answersArgs<ExtArgs>
    wrongQuestions?: boolean | User$wrongQuestionsArgs<ExtArgs>
    dashboard?: boolean | User$dashboardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      answers: Prisma.$UserAnswerPayload<ExtArgs>[]
      wrongQuestions: Prisma.$UserWrongdoingQuestionPayload<ExtArgs>[]
      dashboard: Prisma.$UserDashboardDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatar: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends User$answersArgs<ExtArgs> = {}>(args?: Subset<T, User$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wrongQuestions<T extends User$wrongQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$wrongQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dashboard<T extends User$dashboardArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboardArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.answers
   */
  export type User$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    cursor?: UserAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * User.wrongQuestions
   */
  export type User$wrongQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    where?: UserWrongdoingQuestionWhereInput
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWrongdoingQuestionScalarFieldEnum | UserWrongdoingQuestionScalarFieldEnum[]
  }

  /**
   * User.dashboard
   */
  export type User$dashboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    where?: UserDashboardDataWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserAnswer
   */

  export type AggregateUserAnswer = {
    _count: UserAnswerCountAggregateOutputType | null
    _min: UserAnswerMinAggregateOutputType | null
    _max: UserAnswerMaxAggregateOutputType | null
  }

  export type UserAnswerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    selectedAnswer: string | null
    isCorrect: boolean | null
    timestamp: Date | null
  }

  export type UserAnswerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    selectedAnswer: string | null
    isCorrect: boolean | null
    timestamp: Date | null
  }

  export type UserAnswerCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    selectedAnswer: number
    isCorrect: number
    timestamp: number
    _all: number
  }


  export type UserAnswerMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    selectedAnswer?: true
    isCorrect?: true
    timestamp?: true
  }

  export type UserAnswerMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    selectedAnswer?: true
    isCorrect?: true
    timestamp?: true
  }

  export type UserAnswerCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    selectedAnswer?: true
    isCorrect?: true
    timestamp?: true
    _all?: true
  }

  export type UserAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswer to aggregate.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAnswers
    **/
    _count?: true | UserAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAnswerMaxAggregateInputType
  }

  export type GetUserAnswerAggregateType<T extends UserAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAnswer[P]>
      : GetScalarType<T[P], AggregateUserAnswer[P]>
  }




  export type UserAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithAggregationInput | UserAnswerOrderByWithAggregationInput[]
    by: UserAnswerScalarFieldEnum[] | UserAnswerScalarFieldEnum
    having?: UserAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAnswerCountAggregateInputType | true
    _min?: UserAnswerMinAggregateInputType
    _max?: UserAnswerMaxAggregateInputType
  }

  export type UserAnswerGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp: Date
    _count: UserAnswerCountAggregateOutputType | null
    _min: UserAnswerMinAggregateOutputType | null
    _max: UserAnswerMaxAggregateOutputType | null
  }

  type GetUserAnswerGroupByPayload<T extends UserAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAnswer"]>

  export type UserAnswerSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    selectedAnswer?: boolean
    isCorrect?: boolean
    timestamp?: boolean
  }

  export type UserAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "selectedAnswer" | "isCorrect" | "timestamp", ExtArgs["result"]["userAnswer"]>
  export type UserAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $UserAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAnswer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      selectedAnswer: string
      isCorrect: boolean
      timestamp: Date
    }, ExtArgs["result"]["userAnswer"]>
    composites: {}
  }

  type UserAnswerGetPayload<S extends boolean | null | undefined | UserAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserAnswerPayload, S>

  type UserAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAnswerCountAggregateInputType | true
    }

  export interface UserAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAnswer'], meta: { name: 'UserAnswer' } }
    /**
     * Find zero or one UserAnswer that matches the filter.
     * @param {UserAnswerFindUniqueArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAnswerFindUniqueArgs>(args: SelectSubset<T, UserAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindFirstArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAnswerFindFirstArgs>(args?: SelectSubset<T, UserAnswerFindFirstArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindFirstOrThrowArgs} args - Arguments to find a UserAnswer
     * @example
     * // Get one UserAnswer
     * const userAnswer = await prisma.userAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAnswers
     * const userAnswers = await prisma.userAnswer.findMany()
     * 
     * // Get first 10 UserAnswers
     * const userAnswers = await prisma.userAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAnswerFindManyArgs>(args?: SelectSubset<T, UserAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAnswer.
     * @param {UserAnswerCreateArgs} args - Arguments to create a UserAnswer.
     * @example
     * // Create one UserAnswer
     * const UserAnswer = await prisma.userAnswer.create({
     *   data: {
     *     // ... data to create a UserAnswer
     *   }
     * })
     * 
     */
    create<T extends UserAnswerCreateArgs>(args: SelectSubset<T, UserAnswerCreateArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAnswers.
     * @param {UserAnswerCreateManyArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswer = await prisma.userAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAnswerCreateManyArgs>(args?: SelectSubset<T, UserAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAnswers and returns the data saved in the database.
     * @param {UserAnswerCreateManyAndReturnArgs} args - Arguments to create many UserAnswers.
     * @example
     * // Create many UserAnswers
     * const userAnswer = await prisma.userAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAnswers and only return the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAnswer.
     * @param {UserAnswerDeleteArgs} args - Arguments to delete one UserAnswer.
     * @example
     * // Delete one UserAnswer
     * const UserAnswer = await prisma.userAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserAnswerDeleteArgs>(args: SelectSubset<T, UserAnswerDeleteArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAnswer.
     * @param {UserAnswerUpdateArgs} args - Arguments to update one UserAnswer.
     * @example
     * // Update one UserAnswer
     * const userAnswer = await prisma.userAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAnswerUpdateArgs>(args: SelectSubset<T, UserAnswerUpdateArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAnswers.
     * @param {UserAnswerDeleteManyArgs} args - Arguments to filter UserAnswers to delete.
     * @example
     * // Delete a few UserAnswers
     * const { count } = await prisma.userAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAnswerDeleteManyArgs>(args?: SelectSubset<T, UserAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAnswers
     * const userAnswer = await prisma.userAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAnswerUpdateManyArgs>(args: SelectSubset<T, UserAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAnswers and returns the data updated in the database.
     * @param {UserAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserAnswers.
     * @example
     * // Update many UserAnswers
     * const userAnswer = await prisma.userAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAnswers and only return the `id`
     * const userAnswerWithIdOnly = await prisma.userAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAnswer.
     * @param {UserAnswerUpsertArgs} args - Arguments to update or create a UserAnswer.
     * @example
     * // Update or create a UserAnswer
     * const userAnswer = await prisma.userAnswer.upsert({
     *   create: {
     *     // ... data to create a UserAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserAnswerUpsertArgs>(args: SelectSubset<T, UserAnswerUpsertArgs<ExtArgs>>): Prisma__UserAnswerClient<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerCountArgs} args - Arguments to filter UserAnswers to count.
     * @example
     * // Count the number of UserAnswers
     * const count = await prisma.userAnswer.count({
     *   where: {
     *     // ... the filter for the UserAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserAnswerCountArgs>(
      args?: Subset<T, UserAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAnswerAggregateArgs>(args: Subset<T, UserAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserAnswerAggregateType<T>>

    /**
     * Group by UserAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAnswer model
   */
  readonly fields: UserAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAnswer model
   */
  interface UserAnswerFieldRefs {
    readonly id: FieldRef<"UserAnswer", 'String'>
    readonly userId: FieldRef<"UserAnswer", 'String'>
    readonly questionId: FieldRef<"UserAnswer", 'String'>
    readonly selectedAnswer: FieldRef<"UserAnswer", 'String'>
    readonly isCorrect: FieldRef<"UserAnswer", 'Boolean'>
    readonly timestamp: FieldRef<"UserAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAnswer findUnique
   */
  export type UserAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer findUniqueOrThrow
   */
  export type UserAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer findFirst
   */
  export type UserAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer findFirstOrThrow
   */
  export type UserAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswer to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAnswers.
     */
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer findMany
   */
  export type UserAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserAnswers to fetch.
     */
    where?: UserAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAnswers to fetch.
     */
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAnswers.
     */
    cursor?: UserAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAnswers.
     */
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * UserAnswer create
   */
  export type UserAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAnswer.
     */
    data: XOR<UserAnswerCreateInput, UserAnswerUncheckedCreateInput>
  }

  /**
   * UserAnswer createMany
   */
  export type UserAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswerCreateManyInput | UserAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAnswer createManyAndReturn
   */
  export type UserAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserAnswers.
     */
    data: UserAnswerCreateManyInput | UserAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswer update
   */
  export type UserAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAnswer.
     */
    data: XOR<UserAnswerUpdateInput, UserAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserAnswer to update.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer updateMany
   */
  export type UserAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
  }

  /**
   * UserAnswer updateManyAndReturn
   */
  export type UserAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserAnswers.
     */
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserAnswers to update
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAnswer upsert
   */
  export type UserAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAnswer to update in case it exists.
     */
    where: UserAnswerWhereUniqueInput
    /**
     * In case the UserAnswer found by the `where` argument doesn't exist, create a new UserAnswer with this data.
     */
    create: XOR<UserAnswerCreateInput, UserAnswerUncheckedCreateInput>
    /**
     * In case the UserAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAnswerUpdateInput, UserAnswerUncheckedUpdateInput>
  }

  /**
   * UserAnswer delete
   */
  export type UserAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserAnswer to delete.
     */
    where: UserAnswerWhereUniqueInput
  }

  /**
   * UserAnswer deleteMany
   */
  export type UserAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAnswers to delete
     */
    where?: UserAnswerWhereInput
    /**
     * Limit how many UserAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserAnswer without action
   */
  export type UserAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserWrongdoingQuestion
   */

  export type AggregateUserWrongdoingQuestion = {
    _count: UserWrongdoingQuestionCountAggregateOutputType | null
    _min: UserWrongdoingQuestionMinAggregateOutputType | null
    _max: UserWrongdoingQuestionMaxAggregateOutputType | null
  }

  export type UserWrongdoingQuestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    retestedCorrectly: boolean | null
    lastAttempted: Date | null
  }

  export type UserWrongdoingQuestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    retestedCorrectly: boolean | null
    lastAttempted: Date | null
  }

  export type UserWrongdoingQuestionCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    retestedCorrectly: number
    lastAttempted: number
    _all: number
  }


  export type UserWrongdoingQuestionMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    retestedCorrectly?: true
    lastAttempted?: true
  }

  export type UserWrongdoingQuestionMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    retestedCorrectly?: true
    lastAttempted?: true
  }

  export type UserWrongdoingQuestionCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    retestedCorrectly?: true
    lastAttempted?: true
    _all?: true
  }

  export type UserWrongdoingQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWrongdoingQuestion to aggregate.
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWrongdoingQuestions to fetch.
     */
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWrongdoingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWrongdoingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWrongdoingQuestions
    **/
    _count?: true | UserWrongdoingQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWrongdoingQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWrongdoingQuestionMaxAggregateInputType
  }

  export type GetUserWrongdoingQuestionAggregateType<T extends UserWrongdoingQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWrongdoingQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWrongdoingQuestion[P]>
      : GetScalarType<T[P], AggregateUserWrongdoingQuestion[P]>
  }




  export type UserWrongdoingQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWrongdoingQuestionWhereInput
    orderBy?: UserWrongdoingQuestionOrderByWithAggregationInput | UserWrongdoingQuestionOrderByWithAggregationInput[]
    by: UserWrongdoingQuestionScalarFieldEnum[] | UserWrongdoingQuestionScalarFieldEnum
    having?: UserWrongdoingQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWrongdoingQuestionCountAggregateInputType | true
    _min?: UserWrongdoingQuestionMinAggregateInputType
    _max?: UserWrongdoingQuestionMaxAggregateInputType
  }

  export type UserWrongdoingQuestionGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    retestedCorrectly: boolean
    lastAttempted: Date
    _count: UserWrongdoingQuestionCountAggregateOutputType | null
    _min: UserWrongdoingQuestionMinAggregateOutputType | null
    _max: UserWrongdoingQuestionMaxAggregateOutputType | null
  }

  type GetUserWrongdoingQuestionGroupByPayload<T extends UserWrongdoingQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWrongdoingQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWrongdoingQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWrongdoingQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], UserWrongdoingQuestionGroupByOutputType[P]>
        }
      >
    >


  export type UserWrongdoingQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    retestedCorrectly?: boolean
    lastAttempted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWrongdoingQuestion"]>

  export type UserWrongdoingQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    retestedCorrectly?: boolean
    lastAttempted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWrongdoingQuestion"]>

  export type UserWrongdoingQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    retestedCorrectly?: boolean
    lastAttempted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWrongdoingQuestion"]>

  export type UserWrongdoingQuestionSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    retestedCorrectly?: boolean
    lastAttempted?: boolean
  }

  export type UserWrongdoingQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "retestedCorrectly" | "lastAttempted", ExtArgs["result"]["userWrongdoingQuestion"]>
  export type UserWrongdoingQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserWrongdoingQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type UserWrongdoingQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $UserWrongdoingQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWrongdoingQuestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      retestedCorrectly: boolean
      lastAttempted: Date
    }, ExtArgs["result"]["userWrongdoingQuestion"]>
    composites: {}
  }

  type UserWrongdoingQuestionGetPayload<S extends boolean | null | undefined | UserWrongdoingQuestionDefaultArgs> = $Result.GetResult<Prisma.$UserWrongdoingQuestionPayload, S>

  type UserWrongdoingQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWrongdoingQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWrongdoingQuestionCountAggregateInputType | true
    }

  export interface UserWrongdoingQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWrongdoingQuestion'], meta: { name: 'UserWrongdoingQuestion' } }
    /**
     * Find zero or one UserWrongdoingQuestion that matches the filter.
     * @param {UserWrongdoingQuestionFindUniqueArgs} args - Arguments to find a UserWrongdoingQuestion
     * @example
     * // Get one UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWrongdoingQuestionFindUniqueArgs>(args: SelectSubset<T, UserWrongdoingQuestionFindUniqueArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWrongdoingQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWrongdoingQuestionFindUniqueOrThrowArgs} args - Arguments to find a UserWrongdoingQuestion
     * @example
     * // Get one UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWrongdoingQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWrongdoingQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWrongdoingQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionFindFirstArgs} args - Arguments to find a UserWrongdoingQuestion
     * @example
     * // Get one UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWrongdoingQuestionFindFirstArgs>(args?: SelectSubset<T, UserWrongdoingQuestionFindFirstArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWrongdoingQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionFindFirstOrThrowArgs} args - Arguments to find a UserWrongdoingQuestion
     * @example
     * // Get one UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWrongdoingQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWrongdoingQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWrongdoingQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWrongdoingQuestions
     * const userWrongdoingQuestions = await prisma.userWrongdoingQuestion.findMany()
     * 
     * // Get first 10 UserWrongdoingQuestions
     * const userWrongdoingQuestions = await prisma.userWrongdoingQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWrongdoingQuestionWithIdOnly = await prisma.userWrongdoingQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWrongdoingQuestionFindManyArgs>(args?: SelectSubset<T, UserWrongdoingQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWrongdoingQuestion.
     * @param {UserWrongdoingQuestionCreateArgs} args - Arguments to create a UserWrongdoingQuestion.
     * @example
     * // Create one UserWrongdoingQuestion
     * const UserWrongdoingQuestion = await prisma.userWrongdoingQuestion.create({
     *   data: {
     *     // ... data to create a UserWrongdoingQuestion
     *   }
     * })
     * 
     */
    create<T extends UserWrongdoingQuestionCreateArgs>(args: SelectSubset<T, UserWrongdoingQuestionCreateArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWrongdoingQuestions.
     * @param {UserWrongdoingQuestionCreateManyArgs} args - Arguments to create many UserWrongdoingQuestions.
     * @example
     * // Create many UserWrongdoingQuestions
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWrongdoingQuestionCreateManyArgs>(args?: SelectSubset<T, UserWrongdoingQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWrongdoingQuestions and returns the data saved in the database.
     * @param {UserWrongdoingQuestionCreateManyAndReturnArgs} args - Arguments to create many UserWrongdoingQuestions.
     * @example
     * // Create many UserWrongdoingQuestions
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWrongdoingQuestions and only return the `id`
     * const userWrongdoingQuestionWithIdOnly = await prisma.userWrongdoingQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWrongdoingQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWrongdoingQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWrongdoingQuestion.
     * @param {UserWrongdoingQuestionDeleteArgs} args - Arguments to delete one UserWrongdoingQuestion.
     * @example
     * // Delete one UserWrongdoingQuestion
     * const UserWrongdoingQuestion = await prisma.userWrongdoingQuestion.delete({
     *   where: {
     *     // ... filter to delete one UserWrongdoingQuestion
     *   }
     * })
     * 
     */
    delete<T extends UserWrongdoingQuestionDeleteArgs>(args: SelectSubset<T, UserWrongdoingQuestionDeleteArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWrongdoingQuestion.
     * @param {UserWrongdoingQuestionUpdateArgs} args - Arguments to update one UserWrongdoingQuestion.
     * @example
     * // Update one UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWrongdoingQuestionUpdateArgs>(args: SelectSubset<T, UserWrongdoingQuestionUpdateArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWrongdoingQuestions.
     * @param {UserWrongdoingQuestionDeleteManyArgs} args - Arguments to filter UserWrongdoingQuestions to delete.
     * @example
     * // Delete a few UserWrongdoingQuestions
     * const { count } = await prisma.userWrongdoingQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWrongdoingQuestionDeleteManyArgs>(args?: SelectSubset<T, UserWrongdoingQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWrongdoingQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWrongdoingQuestions
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWrongdoingQuestionUpdateManyArgs>(args: SelectSubset<T, UserWrongdoingQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWrongdoingQuestions and returns the data updated in the database.
     * @param {UserWrongdoingQuestionUpdateManyAndReturnArgs} args - Arguments to update many UserWrongdoingQuestions.
     * @example
     * // Update many UserWrongdoingQuestions
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWrongdoingQuestions and only return the `id`
     * const userWrongdoingQuestionWithIdOnly = await prisma.userWrongdoingQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWrongdoingQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWrongdoingQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWrongdoingQuestion.
     * @param {UserWrongdoingQuestionUpsertArgs} args - Arguments to update or create a UserWrongdoingQuestion.
     * @example
     * // Update or create a UserWrongdoingQuestion
     * const userWrongdoingQuestion = await prisma.userWrongdoingQuestion.upsert({
     *   create: {
     *     // ... data to create a UserWrongdoingQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWrongdoingQuestion we want to update
     *   }
     * })
     */
    upsert<T extends UserWrongdoingQuestionUpsertArgs>(args: SelectSubset<T, UserWrongdoingQuestionUpsertArgs<ExtArgs>>): Prisma__UserWrongdoingQuestionClient<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWrongdoingQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionCountArgs} args - Arguments to filter UserWrongdoingQuestions to count.
     * @example
     * // Count the number of UserWrongdoingQuestions
     * const count = await prisma.userWrongdoingQuestion.count({
     *   where: {
     *     // ... the filter for the UserWrongdoingQuestions we want to count
     *   }
     * })
    **/
    count<T extends UserWrongdoingQuestionCountArgs>(
      args?: Subset<T, UserWrongdoingQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWrongdoingQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWrongdoingQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserWrongdoingQuestionAggregateArgs>(args: Subset<T, UserWrongdoingQuestionAggregateArgs>): Prisma.PrismaPromise<GetUserWrongdoingQuestionAggregateType<T>>

    /**
     * Group by UserWrongdoingQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWrongdoingQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserWrongdoingQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWrongdoingQuestionGroupByArgs['orderBy'] }
        : { orderBy?: UserWrongdoingQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserWrongdoingQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWrongdoingQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWrongdoingQuestion model
   */
  readonly fields: UserWrongdoingQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWrongdoingQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWrongdoingQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserWrongdoingQuestion model
   */
  interface UserWrongdoingQuestionFieldRefs {
    readonly id: FieldRef<"UserWrongdoingQuestion", 'String'>
    readonly userId: FieldRef<"UserWrongdoingQuestion", 'String'>
    readonly questionId: FieldRef<"UserWrongdoingQuestion", 'String'>
    readonly retestedCorrectly: FieldRef<"UserWrongdoingQuestion", 'Boolean'>
    readonly lastAttempted: FieldRef<"UserWrongdoingQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWrongdoingQuestion findUnique
   */
  export type UserWrongdoingQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserWrongdoingQuestion to fetch.
     */
    where: UserWrongdoingQuestionWhereUniqueInput
  }

  /**
   * UserWrongdoingQuestion findUniqueOrThrow
   */
  export type UserWrongdoingQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserWrongdoingQuestion to fetch.
     */
    where: UserWrongdoingQuestionWhereUniqueInput
  }

  /**
   * UserWrongdoingQuestion findFirst
   */
  export type UserWrongdoingQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserWrongdoingQuestion to fetch.
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWrongdoingQuestions to fetch.
     */
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWrongdoingQuestions.
     */
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWrongdoingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWrongdoingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWrongdoingQuestions.
     */
    distinct?: UserWrongdoingQuestionScalarFieldEnum | UserWrongdoingQuestionScalarFieldEnum[]
  }

  /**
   * UserWrongdoingQuestion findFirstOrThrow
   */
  export type UserWrongdoingQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserWrongdoingQuestion to fetch.
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWrongdoingQuestions to fetch.
     */
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWrongdoingQuestions.
     */
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWrongdoingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWrongdoingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWrongdoingQuestions.
     */
    distinct?: UserWrongdoingQuestionScalarFieldEnum | UserWrongdoingQuestionScalarFieldEnum[]
  }

  /**
   * UserWrongdoingQuestion findMany
   */
  export type UserWrongdoingQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserWrongdoingQuestions to fetch.
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWrongdoingQuestions to fetch.
     */
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWrongdoingQuestions.
     */
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWrongdoingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWrongdoingQuestions.
     */
    skip?: number
    distinct?: UserWrongdoingQuestionScalarFieldEnum | UserWrongdoingQuestionScalarFieldEnum[]
  }

  /**
   * UserWrongdoingQuestion create
   */
  export type UserWrongdoingQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWrongdoingQuestion.
     */
    data: XOR<UserWrongdoingQuestionCreateInput, UserWrongdoingQuestionUncheckedCreateInput>
  }

  /**
   * UserWrongdoingQuestion createMany
   */
  export type UserWrongdoingQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWrongdoingQuestions.
     */
    data: UserWrongdoingQuestionCreateManyInput | UserWrongdoingQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWrongdoingQuestion createManyAndReturn
   */
  export type UserWrongdoingQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many UserWrongdoingQuestions.
     */
    data: UserWrongdoingQuestionCreateManyInput | UserWrongdoingQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWrongdoingQuestion update
   */
  export type UserWrongdoingQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWrongdoingQuestion.
     */
    data: XOR<UserWrongdoingQuestionUpdateInput, UserWrongdoingQuestionUncheckedUpdateInput>
    /**
     * Choose, which UserWrongdoingQuestion to update.
     */
    where: UserWrongdoingQuestionWhereUniqueInput
  }

  /**
   * UserWrongdoingQuestion updateMany
   */
  export type UserWrongdoingQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWrongdoingQuestions.
     */
    data: XOR<UserWrongdoingQuestionUpdateManyMutationInput, UserWrongdoingQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserWrongdoingQuestions to update
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * Limit how many UserWrongdoingQuestions to update.
     */
    limit?: number
  }

  /**
   * UserWrongdoingQuestion updateManyAndReturn
   */
  export type UserWrongdoingQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * The data used to update UserWrongdoingQuestions.
     */
    data: XOR<UserWrongdoingQuestionUpdateManyMutationInput, UserWrongdoingQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserWrongdoingQuestions to update
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * Limit how many UserWrongdoingQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWrongdoingQuestion upsert
   */
  export type UserWrongdoingQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWrongdoingQuestion to update in case it exists.
     */
    where: UserWrongdoingQuestionWhereUniqueInput
    /**
     * In case the UserWrongdoingQuestion found by the `where` argument doesn't exist, create a new UserWrongdoingQuestion with this data.
     */
    create: XOR<UserWrongdoingQuestionCreateInput, UserWrongdoingQuestionUncheckedCreateInput>
    /**
     * In case the UserWrongdoingQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWrongdoingQuestionUpdateInput, UserWrongdoingQuestionUncheckedUpdateInput>
  }

  /**
   * UserWrongdoingQuestion delete
   */
  export type UserWrongdoingQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    /**
     * Filter which UserWrongdoingQuestion to delete.
     */
    where: UserWrongdoingQuestionWhereUniqueInput
  }

  /**
   * UserWrongdoingQuestion deleteMany
   */
  export type UserWrongdoingQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWrongdoingQuestions to delete
     */
    where?: UserWrongdoingQuestionWhereInput
    /**
     * Limit how many UserWrongdoingQuestions to delete.
     */
    limit?: number
  }

  /**
   * UserWrongdoingQuestion without action
   */
  export type UserWrongdoingQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserDashboardData
   */

  export type AggregateUserDashboardData = {
    _count: UserDashboardDataCountAggregateOutputType | null
    _avg: UserDashboardDataAvgAggregateOutputType | null
    _sum: UserDashboardDataSumAggregateOutputType | null
    _min: UserDashboardDataMinAggregateOutputType | null
    _max: UserDashboardDataMaxAggregateOutputType | null
  }

  export type UserDashboardDataAvgAggregateOutputType = {
    totalPoints: number | null
    previousSessionPoints: number | null
  }

  export type UserDashboardDataSumAggregateOutputType = {
    totalPoints: number | null
    previousSessionPoints: number | null
  }

  export type UserDashboardDataMinAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPoints: number | null
    previousSessionPoints: number | null
  }

  export type UserDashboardDataMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    totalPoints: number | null
    previousSessionPoints: number | null
  }

  export type UserDashboardDataCountAggregateOutputType = {
    id: number
    userId: number
    totalPoints: number
    previousSessionPoints: number
    pointsHistory: number
    _all: number
  }


  export type UserDashboardDataAvgAggregateInputType = {
    totalPoints?: true
    previousSessionPoints?: true
  }

  export type UserDashboardDataSumAggregateInputType = {
    totalPoints?: true
    previousSessionPoints?: true
  }

  export type UserDashboardDataMinAggregateInputType = {
    id?: true
    userId?: true
    totalPoints?: true
    previousSessionPoints?: true
  }

  export type UserDashboardDataMaxAggregateInputType = {
    id?: true
    userId?: true
    totalPoints?: true
    previousSessionPoints?: true
  }

  export type UserDashboardDataCountAggregateInputType = {
    id?: true
    userId?: true
    totalPoints?: true
    previousSessionPoints?: true
    pointsHistory?: true
    _all?: true
  }

  export type UserDashboardDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDashboardData to aggregate.
     */
    where?: UserDashboardDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDashboardData to fetch.
     */
    orderBy?: UserDashboardDataOrderByWithRelationInput | UserDashboardDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDashboardDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDashboardData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDashboardData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDashboardData
    **/
    _count?: true | UserDashboardDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDashboardDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDashboardDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDashboardDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDashboardDataMaxAggregateInputType
  }

  export type GetUserDashboardDataAggregateType<T extends UserDashboardDataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDashboardData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDashboardData[P]>
      : GetScalarType<T[P], AggregateUserDashboardData[P]>
  }




  export type UserDashboardDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDashboardDataWhereInput
    orderBy?: UserDashboardDataOrderByWithAggregationInput | UserDashboardDataOrderByWithAggregationInput[]
    by: UserDashboardDataScalarFieldEnum[] | UserDashboardDataScalarFieldEnum
    having?: UserDashboardDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDashboardDataCountAggregateInputType | true
    _avg?: UserDashboardDataAvgAggregateInputType
    _sum?: UserDashboardDataSumAggregateInputType
    _min?: UserDashboardDataMinAggregateInputType
    _max?: UserDashboardDataMaxAggregateInputType
  }

  export type UserDashboardDataGroupByOutputType = {
    id: string
    userId: string
    totalPoints: number
    previousSessionPoints: number
    pointsHistory: JsonValue
    _count: UserDashboardDataCountAggregateOutputType | null
    _avg: UserDashboardDataAvgAggregateOutputType | null
    _sum: UserDashboardDataSumAggregateOutputType | null
    _min: UserDashboardDataMinAggregateOutputType | null
    _max: UserDashboardDataMaxAggregateOutputType | null
  }

  type GetUserDashboardDataGroupByPayload<T extends UserDashboardDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDashboardDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDashboardDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDashboardDataGroupByOutputType[P]>
            : GetScalarType<T[P], UserDashboardDataGroupByOutputType[P]>
        }
      >
    >


  export type UserDashboardDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPoints?: boolean
    previousSessionPoints?: boolean
    pointsHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDashboardData"]>

  export type UserDashboardDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPoints?: boolean
    previousSessionPoints?: boolean
    pointsHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDashboardData"]>

  export type UserDashboardDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalPoints?: boolean
    previousSessionPoints?: boolean
    pointsHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDashboardData"]>

  export type UserDashboardDataSelectScalar = {
    id?: boolean
    userId?: boolean
    totalPoints?: boolean
    previousSessionPoints?: boolean
    pointsHistory?: boolean
  }

  export type UserDashboardDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalPoints" | "previousSessionPoints" | "pointsHistory", ExtArgs["result"]["userDashboardData"]>
  export type UserDashboardDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDashboardDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDashboardDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDashboardDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDashboardData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      totalPoints: number
      previousSessionPoints: number
      pointsHistory: Prisma.JsonValue
    }, ExtArgs["result"]["userDashboardData"]>
    composites: {}
  }

  type UserDashboardDataGetPayload<S extends boolean | null | undefined | UserDashboardDataDefaultArgs> = $Result.GetResult<Prisma.$UserDashboardDataPayload, S>

  type UserDashboardDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDashboardDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDashboardDataCountAggregateInputType | true
    }

  export interface UserDashboardDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDashboardData'], meta: { name: 'UserDashboardData' } }
    /**
     * Find zero or one UserDashboardData that matches the filter.
     * @param {UserDashboardDataFindUniqueArgs} args - Arguments to find a UserDashboardData
     * @example
     * // Get one UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDashboardDataFindUniqueArgs>(args: SelectSubset<T, UserDashboardDataFindUniqueArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDashboardData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDashboardDataFindUniqueOrThrowArgs} args - Arguments to find a UserDashboardData
     * @example
     * // Get one UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDashboardDataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDashboardDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDashboardData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataFindFirstArgs} args - Arguments to find a UserDashboardData
     * @example
     * // Get one UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDashboardDataFindFirstArgs>(args?: SelectSubset<T, UserDashboardDataFindFirstArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDashboardData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataFindFirstOrThrowArgs} args - Arguments to find a UserDashboardData
     * @example
     * // Get one UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDashboardDataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDashboardDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDashboardData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findMany()
     * 
     * // Get first 10 UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDashboardDataWithIdOnly = await prisma.userDashboardData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDashboardDataFindManyArgs>(args?: SelectSubset<T, UserDashboardDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDashboardData.
     * @param {UserDashboardDataCreateArgs} args - Arguments to create a UserDashboardData.
     * @example
     * // Create one UserDashboardData
     * const UserDashboardData = await prisma.userDashboardData.create({
     *   data: {
     *     // ... data to create a UserDashboardData
     *   }
     * })
     * 
     */
    create<T extends UserDashboardDataCreateArgs>(args: SelectSubset<T, UserDashboardDataCreateArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDashboardData.
     * @param {UserDashboardDataCreateManyArgs} args - Arguments to create many UserDashboardData.
     * @example
     * // Create many UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDashboardDataCreateManyArgs>(args?: SelectSubset<T, UserDashboardDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDashboardData and returns the data saved in the database.
     * @param {UserDashboardDataCreateManyAndReturnArgs} args - Arguments to create many UserDashboardData.
     * @example
     * // Create many UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDashboardData and only return the `id`
     * const userDashboardDataWithIdOnly = await prisma.userDashboardData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDashboardDataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDashboardDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDashboardData.
     * @param {UserDashboardDataDeleteArgs} args - Arguments to delete one UserDashboardData.
     * @example
     * // Delete one UserDashboardData
     * const UserDashboardData = await prisma.userDashboardData.delete({
     *   where: {
     *     // ... filter to delete one UserDashboardData
     *   }
     * })
     * 
     */
    delete<T extends UserDashboardDataDeleteArgs>(args: SelectSubset<T, UserDashboardDataDeleteArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDashboardData.
     * @param {UserDashboardDataUpdateArgs} args - Arguments to update one UserDashboardData.
     * @example
     * // Update one UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDashboardDataUpdateArgs>(args: SelectSubset<T, UserDashboardDataUpdateArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDashboardData.
     * @param {UserDashboardDataDeleteManyArgs} args - Arguments to filter UserDashboardData to delete.
     * @example
     * // Delete a few UserDashboardData
     * const { count } = await prisma.userDashboardData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDashboardDataDeleteManyArgs>(args?: SelectSubset<T, UserDashboardDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDashboardData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDashboardDataUpdateManyArgs>(args: SelectSubset<T, UserDashboardDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDashboardData and returns the data updated in the database.
     * @param {UserDashboardDataUpdateManyAndReturnArgs} args - Arguments to update many UserDashboardData.
     * @example
     * // Update many UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDashboardData and only return the `id`
     * const userDashboardDataWithIdOnly = await prisma.userDashboardData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDashboardDataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDashboardDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDashboardData.
     * @param {UserDashboardDataUpsertArgs} args - Arguments to update or create a UserDashboardData.
     * @example
     * // Update or create a UserDashboardData
     * const userDashboardData = await prisma.userDashboardData.upsert({
     *   create: {
     *     // ... data to create a UserDashboardData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDashboardData we want to update
     *   }
     * })
     */
    upsert<T extends UserDashboardDataUpsertArgs>(args: SelectSubset<T, UserDashboardDataUpsertArgs<ExtArgs>>): Prisma__UserDashboardDataClient<$Result.GetResult<Prisma.$UserDashboardDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDashboardData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataCountArgs} args - Arguments to filter UserDashboardData to count.
     * @example
     * // Count the number of UserDashboardData
     * const count = await prisma.userDashboardData.count({
     *   where: {
     *     // ... the filter for the UserDashboardData we want to count
     *   }
     * })
    **/
    count<T extends UserDashboardDataCountArgs>(
      args?: Subset<T, UserDashboardDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDashboardDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDashboardData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDashboardDataAggregateArgs>(args: Subset<T, UserDashboardDataAggregateArgs>): Prisma.PrismaPromise<GetUserDashboardDataAggregateType<T>>

    /**
     * Group by UserDashboardData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDashboardDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDashboardDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDashboardDataGroupByArgs['orderBy'] }
        : { orderBy?: UserDashboardDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDashboardDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDashboardDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDashboardData model
   */
  readonly fields: UserDashboardDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDashboardData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDashboardDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDashboardData model
   */
  interface UserDashboardDataFieldRefs {
    readonly id: FieldRef<"UserDashboardData", 'String'>
    readonly userId: FieldRef<"UserDashboardData", 'String'>
    readonly totalPoints: FieldRef<"UserDashboardData", 'Int'>
    readonly previousSessionPoints: FieldRef<"UserDashboardData", 'Int'>
    readonly pointsHistory: FieldRef<"UserDashboardData", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserDashboardData findUnique
   */
  export type UserDashboardDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter, which UserDashboardData to fetch.
     */
    where: UserDashboardDataWhereUniqueInput
  }

  /**
   * UserDashboardData findUniqueOrThrow
   */
  export type UserDashboardDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter, which UserDashboardData to fetch.
     */
    where: UserDashboardDataWhereUniqueInput
  }

  /**
   * UserDashboardData findFirst
   */
  export type UserDashboardDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter, which UserDashboardData to fetch.
     */
    where?: UserDashboardDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDashboardData to fetch.
     */
    orderBy?: UserDashboardDataOrderByWithRelationInput | UserDashboardDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDashboardData.
     */
    cursor?: UserDashboardDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDashboardData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDashboardData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDashboardData.
     */
    distinct?: UserDashboardDataScalarFieldEnum | UserDashboardDataScalarFieldEnum[]
  }

  /**
   * UserDashboardData findFirstOrThrow
   */
  export type UserDashboardDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter, which UserDashboardData to fetch.
     */
    where?: UserDashboardDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDashboardData to fetch.
     */
    orderBy?: UserDashboardDataOrderByWithRelationInput | UserDashboardDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDashboardData.
     */
    cursor?: UserDashboardDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDashboardData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDashboardData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDashboardData.
     */
    distinct?: UserDashboardDataScalarFieldEnum | UserDashboardDataScalarFieldEnum[]
  }

  /**
   * UserDashboardData findMany
   */
  export type UserDashboardDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter, which UserDashboardData to fetch.
     */
    where?: UserDashboardDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDashboardData to fetch.
     */
    orderBy?: UserDashboardDataOrderByWithRelationInput | UserDashboardDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDashboardData.
     */
    cursor?: UserDashboardDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDashboardData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDashboardData.
     */
    skip?: number
    distinct?: UserDashboardDataScalarFieldEnum | UserDashboardDataScalarFieldEnum[]
  }

  /**
   * UserDashboardData create
   */
  export type UserDashboardDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDashboardData.
     */
    data: XOR<UserDashboardDataCreateInput, UserDashboardDataUncheckedCreateInput>
  }

  /**
   * UserDashboardData createMany
   */
  export type UserDashboardDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDashboardData.
     */
    data: UserDashboardDataCreateManyInput | UserDashboardDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDashboardData createManyAndReturn
   */
  export type UserDashboardDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * The data used to create many UserDashboardData.
     */
    data: UserDashboardDataCreateManyInput | UserDashboardDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDashboardData update
   */
  export type UserDashboardDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDashboardData.
     */
    data: XOR<UserDashboardDataUpdateInput, UserDashboardDataUncheckedUpdateInput>
    /**
     * Choose, which UserDashboardData to update.
     */
    where: UserDashboardDataWhereUniqueInput
  }

  /**
   * UserDashboardData updateMany
   */
  export type UserDashboardDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDashboardData.
     */
    data: XOR<UserDashboardDataUpdateManyMutationInput, UserDashboardDataUncheckedUpdateManyInput>
    /**
     * Filter which UserDashboardData to update
     */
    where?: UserDashboardDataWhereInput
    /**
     * Limit how many UserDashboardData to update.
     */
    limit?: number
  }

  /**
   * UserDashboardData updateManyAndReturn
   */
  export type UserDashboardDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * The data used to update UserDashboardData.
     */
    data: XOR<UserDashboardDataUpdateManyMutationInput, UserDashboardDataUncheckedUpdateManyInput>
    /**
     * Filter which UserDashboardData to update
     */
    where?: UserDashboardDataWhereInput
    /**
     * Limit how many UserDashboardData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDashboardData upsert
   */
  export type UserDashboardDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDashboardData to update in case it exists.
     */
    where: UserDashboardDataWhereUniqueInput
    /**
     * In case the UserDashboardData found by the `where` argument doesn't exist, create a new UserDashboardData with this data.
     */
    create: XOR<UserDashboardDataCreateInput, UserDashboardDataUncheckedCreateInput>
    /**
     * In case the UserDashboardData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDashboardDataUpdateInput, UserDashboardDataUncheckedUpdateInput>
  }

  /**
   * UserDashboardData delete
   */
  export type UserDashboardDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
    /**
     * Filter which UserDashboardData to delete.
     */
    where: UserDashboardDataWhereUniqueInput
  }

  /**
   * UserDashboardData deleteMany
   */
  export type UserDashboardDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDashboardData to delete
     */
    where?: UserDashboardDataWhereInput
    /**
     * Limit how many UserDashboardData to delete.
     */
    limit?: number
  }

  /**
   * UserDashboardData without action
   */
  export type UserDashboardDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDashboardData
     */
    select?: UserDashboardDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDashboardData
     */
    omit?: UserDashboardDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDashboardDataInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswer: string | null
    topic: string | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    correctAnswer: string | null
    topic: string | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    options: number
    correctAnswer: number
    topic: number
    createdAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    correctAnswer?: true
    topic?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    correctAnswer?: true
    topic?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    options?: true
    correctAnswer?: true
    topic?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    options: string[]
    correctAnswer: string
    topic: string
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    topic?: boolean
    createdAt?: boolean
    answers?: boolean | Question$answersArgs<ExtArgs>
    wrongAnswers?: boolean | Question$wrongAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    topic?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    topic?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    options?: boolean
    correctAnswer?: boolean
    topic?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "options" | "correctAnswer" | "topic" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | Question$answersArgs<ExtArgs>
    wrongAnswers?: boolean | Question$wrongAnswersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      answers: Prisma.$UserAnswerPayload<ExtArgs>[]
      wrongAnswers: Prisma.$UserWrongdoingQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      options: string[]
      correctAnswer: string
      topic: string
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wrongAnswers<T extends Question$wrongAnswersArgs<ExtArgs> = {}>(args?: Subset<T, Question$wrongAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWrongdoingQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String[]'>
    readonly correctAnswer: FieldRef<"Question", 'String'>
    readonly topic: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAnswer
     */
    select?: UserAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAnswer
     */
    omit?: UserAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAnswerInclude<ExtArgs> | null
    where?: UserAnswerWhereInput
    orderBy?: UserAnswerOrderByWithRelationInput | UserAnswerOrderByWithRelationInput[]
    cursor?: UserAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAnswerScalarFieldEnum | UserAnswerScalarFieldEnum[]
  }

  /**
   * Question.wrongAnswers
   */
  export type Question$wrongAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWrongdoingQuestion
     */
    select?: UserWrongdoingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWrongdoingQuestion
     */
    omit?: UserWrongdoingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWrongdoingQuestionInclude<ExtArgs> | null
    where?: UserWrongdoingQuestionWhereInput
    orderBy?: UserWrongdoingQuestionOrderByWithRelationInput | UserWrongdoingQuestionOrderByWithRelationInput[]
    cursor?: UserWrongdoingQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWrongdoingQuestionScalarFieldEnum | UserWrongdoingQuestionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAnswerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    selectedAnswer: 'selectedAnswer',
    isCorrect: 'isCorrect',
    timestamp: 'timestamp'
  };

  export type UserAnswerScalarFieldEnum = (typeof UserAnswerScalarFieldEnum)[keyof typeof UserAnswerScalarFieldEnum]


  export const UserWrongdoingQuestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    retestedCorrectly: 'retestedCorrectly',
    lastAttempted: 'lastAttempted'
  };

  export type UserWrongdoingQuestionScalarFieldEnum = (typeof UserWrongdoingQuestionScalarFieldEnum)[keyof typeof UserWrongdoingQuestionScalarFieldEnum]


  export const UserDashboardDataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalPoints: 'totalPoints',
    previousSessionPoints: 'previousSessionPoints',
    pointsHistory: 'pointsHistory'
  };

  export type UserDashboardDataScalarFieldEnum = (typeof UserDashboardDataScalarFieldEnum)[keyof typeof UserDashboardDataScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    options: 'options',
    correctAnswer: 'correctAnswer',
    topic: 'topic',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    answers?: UserAnswerListRelationFilter
    wrongQuestions?: UserWrongdoingQuestionListRelationFilter
    dashboard?: XOR<UserDashboardDataNullableScalarRelationFilter, UserDashboardDataWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    answers?: UserAnswerOrderByRelationAggregateInput
    wrongQuestions?: UserWrongdoingQuestionOrderByRelationAggregateInput
    dashboard?: UserDashboardDataOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    answers?: UserAnswerListRelationFilter
    wrongQuestions?: UserWrongdoingQuestionListRelationFilter
    dashboard?: XOR<UserDashboardDataNullableScalarRelationFilter, UserDashboardDataWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserAnswerWhereInput = {
    AND?: UserAnswerWhereInput | UserAnswerWhereInput[]
    OR?: UserAnswerWhereInput[]
    NOT?: UserAnswerWhereInput | UserAnswerWhereInput[]
    id?: StringFilter<"UserAnswer"> | string
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    selectedAnswer?: StringFilter<"UserAnswer"> | string
    isCorrect?: BoolFilter<"UserAnswer"> | boolean
    timestamp?: DateTimeFilter<"UserAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type UserAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type UserAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAnswerWhereInput | UserAnswerWhereInput[]
    OR?: UserAnswerWhereInput[]
    NOT?: UserAnswerWhereInput | UserAnswerWhereInput[]
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    selectedAnswer?: StringFilter<"UserAnswer"> | string
    isCorrect?: BoolFilter<"UserAnswer"> | boolean
    timestamp?: DateTimeFilter<"UserAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type UserAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timestamp?: SortOrder
    _count?: UserAnswerCountOrderByAggregateInput
    _max?: UserAnswerMaxOrderByAggregateInput
    _min?: UserAnswerMinOrderByAggregateInput
  }

  export type UserAnswerScalarWhereWithAggregatesInput = {
    AND?: UserAnswerScalarWhereWithAggregatesInput | UserAnswerScalarWhereWithAggregatesInput[]
    OR?: UserAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserAnswerScalarWhereWithAggregatesInput | UserAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAnswer"> | string
    userId?: StringWithAggregatesFilter<"UserAnswer"> | string
    questionId?: StringWithAggregatesFilter<"UserAnswer"> | string
    selectedAnswer?: StringWithAggregatesFilter<"UserAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"UserAnswer"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"UserAnswer"> | Date | string
  }

  export type UserWrongdoingQuestionWhereInput = {
    AND?: UserWrongdoingQuestionWhereInput | UserWrongdoingQuestionWhereInput[]
    OR?: UserWrongdoingQuestionWhereInput[]
    NOT?: UserWrongdoingQuestionWhereInput | UserWrongdoingQuestionWhereInput[]
    id?: StringFilter<"UserWrongdoingQuestion"> | string
    userId?: StringFilter<"UserWrongdoingQuestion"> | string
    questionId?: StringFilter<"UserWrongdoingQuestion"> | string
    retestedCorrectly?: BoolFilter<"UserWrongdoingQuestion"> | boolean
    lastAttempted?: DateTimeFilter<"UserWrongdoingQuestion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type UserWrongdoingQuestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    retestedCorrectly?: SortOrder
    lastAttempted?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type UserWrongdoingQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWrongdoingQuestionWhereInput | UserWrongdoingQuestionWhereInput[]
    OR?: UserWrongdoingQuestionWhereInput[]
    NOT?: UserWrongdoingQuestionWhereInput | UserWrongdoingQuestionWhereInput[]
    userId?: StringFilter<"UserWrongdoingQuestion"> | string
    questionId?: StringFilter<"UserWrongdoingQuestion"> | string
    retestedCorrectly?: BoolFilter<"UserWrongdoingQuestion"> | boolean
    lastAttempted?: DateTimeFilter<"UserWrongdoingQuestion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type UserWrongdoingQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    retestedCorrectly?: SortOrder
    lastAttempted?: SortOrder
    _count?: UserWrongdoingQuestionCountOrderByAggregateInput
    _max?: UserWrongdoingQuestionMaxOrderByAggregateInput
    _min?: UserWrongdoingQuestionMinOrderByAggregateInput
  }

  export type UserWrongdoingQuestionScalarWhereWithAggregatesInput = {
    AND?: UserWrongdoingQuestionScalarWhereWithAggregatesInput | UserWrongdoingQuestionScalarWhereWithAggregatesInput[]
    OR?: UserWrongdoingQuestionScalarWhereWithAggregatesInput[]
    NOT?: UserWrongdoingQuestionScalarWhereWithAggregatesInput | UserWrongdoingQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWrongdoingQuestion"> | string
    userId?: StringWithAggregatesFilter<"UserWrongdoingQuestion"> | string
    questionId?: StringWithAggregatesFilter<"UserWrongdoingQuestion"> | string
    retestedCorrectly?: BoolWithAggregatesFilter<"UserWrongdoingQuestion"> | boolean
    lastAttempted?: DateTimeWithAggregatesFilter<"UserWrongdoingQuestion"> | Date | string
  }

  export type UserDashboardDataWhereInput = {
    AND?: UserDashboardDataWhereInput | UserDashboardDataWhereInput[]
    OR?: UserDashboardDataWhereInput[]
    NOT?: UserDashboardDataWhereInput | UserDashboardDataWhereInput[]
    id?: StringFilter<"UserDashboardData"> | string
    userId?: StringFilter<"UserDashboardData"> | string
    totalPoints?: IntFilter<"UserDashboardData"> | number
    previousSessionPoints?: IntFilter<"UserDashboardData"> | number
    pointsHistory?: JsonFilter<"UserDashboardData">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDashboardDataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
    pointsHistory?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDashboardDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserDashboardDataWhereInput | UserDashboardDataWhereInput[]
    OR?: UserDashboardDataWhereInput[]
    NOT?: UserDashboardDataWhereInput | UserDashboardDataWhereInput[]
    totalPoints?: IntFilter<"UserDashboardData"> | number
    previousSessionPoints?: IntFilter<"UserDashboardData"> | number
    pointsHistory?: JsonFilter<"UserDashboardData">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserDashboardDataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
    pointsHistory?: SortOrder
    _count?: UserDashboardDataCountOrderByAggregateInput
    _avg?: UserDashboardDataAvgOrderByAggregateInput
    _max?: UserDashboardDataMaxOrderByAggregateInput
    _min?: UserDashboardDataMinOrderByAggregateInput
    _sum?: UserDashboardDataSumOrderByAggregateInput
  }

  export type UserDashboardDataScalarWhereWithAggregatesInput = {
    AND?: UserDashboardDataScalarWhereWithAggregatesInput | UserDashboardDataScalarWhereWithAggregatesInput[]
    OR?: UserDashboardDataScalarWhereWithAggregatesInput[]
    NOT?: UserDashboardDataScalarWhereWithAggregatesInput | UserDashboardDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDashboardData"> | string
    userId?: StringWithAggregatesFilter<"UserDashboardData"> | string
    totalPoints?: IntWithAggregatesFilter<"UserDashboardData"> | number
    previousSessionPoints?: IntWithAggregatesFilter<"UserDashboardData"> | number
    pointsHistory?: JsonWithAggregatesFilter<"UserDashboardData">
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: StringFilter<"Question"> | string
    topic?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    answers?: UserAnswerListRelationFilter
    wrongAnswers?: UserWrongdoingQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    answers?: UserAnswerOrderByRelationAggregateInput
    wrongAnswers?: UserWrongdoingQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: StringFilter<"Question"> | string
    topic?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    answers?: UserAnswerListRelationFilter
    wrongAnswers?: UserWrongdoingQuestionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: StringWithAggregatesFilter<"Question"> | string
    topic?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    wrongQuestions?: UserWrongdoingQuestionCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    wrongQuestions?: UserWrongdoingQuestionUncheckedCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    wrongQuestions?: UserWrongdoingQuestionUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    wrongQuestions?: UserWrongdoingQuestionUncheckedUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAnswerCreateInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAnswersInput
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionCreateInput = {
    id?: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
    user: UserCreateNestedOneWithoutWrongQuestionsInput
    question: QuestionCreateNestedOneWithoutWrongAnswersInput
  }

  export type UserWrongdoingQuestionUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserWrongdoingQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWrongQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutWrongAnswersNestedInput
  }

  export type UserWrongdoingQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserWrongdoingQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDashboardDataCreateInput = {
    id?: string
    totalPoints?: number
    previousSessionPoints?: number
    pointsHistory: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDashboardInput
  }

  export type UserDashboardDataUncheckedCreateInput = {
    id?: string
    userId: string
    totalPoints?: number
    previousSessionPoints?: number
    pointsHistory: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDashboardNestedInput
  }

  export type UserDashboardDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataCreateManyInput = {
    id?: string
    userId: string
    totalPoints?: number
    previousSessionPoints?: number
    pointsHistory: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
    wrongAnswers?: UserWrongdoingQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
    wrongAnswers?: UserWrongdoingQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
    wrongAnswers?: UserWrongdoingQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
    wrongAnswers?: UserWrongdoingQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserAnswerListRelationFilter = {
    every?: UserAnswerWhereInput
    some?: UserAnswerWhereInput
    none?: UserAnswerWhereInput
  }

  export type UserWrongdoingQuestionListRelationFilter = {
    every?: UserWrongdoingQuestionWhereInput
    some?: UserWrongdoingQuestionWhereInput
    none?: UserWrongdoingQuestionWhereInput
  }

  export type UserDashboardDataNullableScalarRelationFilter = {
    is?: UserDashboardDataWhereInput | null
    isNot?: UserDashboardDataWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWrongdoingQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type UserAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timestamp?: SortOrder
  }

  export type UserAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timestamp?: SortOrder
  }

  export type UserAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    selectedAnswer?: SortOrder
    isCorrect?: SortOrder
    timestamp?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserWrongdoingQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    retestedCorrectly?: SortOrder
    lastAttempted?: SortOrder
  }

  export type UserWrongdoingQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    retestedCorrectly?: SortOrder
    lastAttempted?: SortOrder
  }

  export type UserWrongdoingQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    retestedCorrectly?: SortOrder
    lastAttempted?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserDashboardDataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
    pointsHistory?: SortOrder
  }

  export type UserDashboardDataAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
  }

  export type UserDashboardDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
  }

  export type UserDashboardDataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
  }

  export type UserDashboardDataSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    previousSessionPoints?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    correctAnswer?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserWrongdoingQuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput> | UserWrongdoingQuestionCreateWithoutUserInput[] | UserWrongdoingQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutUserInput | UserWrongdoingQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserWrongdoingQuestionCreateManyUserInputEnvelope
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
  }

  export type UserDashboardDataCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDashboardDataCreateOrConnectWithoutUserInput
    connect?: UserDashboardDataWhereUniqueInput
  }

  export type UserAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserWrongdoingQuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput> | UserWrongdoingQuestionCreateWithoutUserInput[] | UserWrongdoingQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutUserInput | UserWrongdoingQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserWrongdoingQuestionCreateManyUserInputEnvelope
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
  }

  export type UserDashboardDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDashboardDataCreateOrConnectWithoutUserInput
    connect?: UserDashboardDataWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutUserInput | UserAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutUserInput | UserAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutUserInput | UserAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserWrongdoingQuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput> | UserWrongdoingQuestionCreateWithoutUserInput[] | UserWrongdoingQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutUserInput | UserWrongdoingQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserWrongdoingQuestionUpsertWithWhereUniqueWithoutUserInput | UserWrongdoingQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWrongdoingQuestionCreateManyUserInputEnvelope
    set?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    disconnect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    delete?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    update?: UserWrongdoingQuestionUpdateWithWhereUniqueWithoutUserInput | UserWrongdoingQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWrongdoingQuestionUpdateManyWithWhereWithoutUserInput | UserWrongdoingQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
  }

  export type UserDashboardDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDashboardDataCreateOrConnectWithoutUserInput
    upsert?: UserDashboardDataUpsertWithoutUserInput
    disconnect?: UserDashboardDataWhereInput | boolean
    delete?: UserDashboardDataWhereInput | boolean
    connect?: UserDashboardDataWhereUniqueInput
    update?: XOR<XOR<UserDashboardDataUpdateToOneWithWhereWithoutUserInput, UserDashboardDataUpdateWithoutUserInput>, UserDashboardDataUncheckedUpdateWithoutUserInput>
  }

  export type UserAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput> | UserAnswerCreateWithoutUserInput[] | UserAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutUserInput | UserAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutUserInput | UserAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAnswerCreateManyUserInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutUserInput | UserAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutUserInput | UserAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserWrongdoingQuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput> | UserWrongdoingQuestionCreateWithoutUserInput[] | UserWrongdoingQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutUserInput | UserWrongdoingQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserWrongdoingQuestionUpsertWithWhereUniqueWithoutUserInput | UserWrongdoingQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWrongdoingQuestionCreateManyUserInputEnvelope
    set?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    disconnect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    delete?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    update?: UserWrongdoingQuestionUpdateWithWhereUniqueWithoutUserInput | UserWrongdoingQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWrongdoingQuestionUpdateManyWithWhereWithoutUserInput | UserWrongdoingQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
  }

  export type UserDashboardDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDashboardDataCreateOrConnectWithoutUserInput
    upsert?: UserDashboardDataUpsertWithoutUserInput
    disconnect?: UserDashboardDataWhereInput | boolean
    delete?: UserDashboardDataWhereInput | boolean
    connect?: UserDashboardDataWhereUniqueInput
    update?: XOR<XOR<UserDashboardDataUpdateToOneWithWhereWithoutUserInput, UserDashboardDataUpdateWithoutUserInput>, UserDashboardDataUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAnswersInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput
    upsert?: UserUpsertWithoutAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnswersInput, UserUpdateWithoutAnswersInput>, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutWrongQuestionsInput = {
    create?: XOR<UserCreateWithoutWrongQuestionsInput, UserUncheckedCreateWithoutWrongQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWrongQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutWrongAnswersInput = {
    create?: XOR<QuestionCreateWithoutWrongAnswersInput, QuestionUncheckedCreateWithoutWrongAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWrongAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWrongQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutWrongQuestionsInput, UserUncheckedCreateWithoutWrongQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWrongQuestionsInput
    upsert?: UserUpsertWithoutWrongQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWrongQuestionsInput, UserUpdateWithoutWrongQuestionsInput>, UserUncheckedUpdateWithoutWrongQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutWrongAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutWrongAnswersInput, QuestionUncheckedCreateWithoutWrongAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWrongAnswersInput
    upsert?: QuestionUpsertWithoutWrongAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutWrongAnswersInput, QuestionUpdateWithoutWrongAnswersInput>, QuestionUncheckedUpdateWithoutWrongAnswersInput>
  }

  export type UserCreateNestedOneWithoutDashboardInput = {
    create?: XOR<UserCreateWithoutDashboardInput, UserUncheckedCreateWithoutDashboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDashboardNestedInput = {
    create?: XOR<UserCreateWithoutDashboardInput, UserUncheckedCreateWithoutDashboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardInput
    upsert?: UserUpsertWithoutDashboardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardInput, UserUpdateWithoutDashboardInput>, UserUncheckedUpdateWithoutDashboardInput>
  }

  export type QuestionCreateoptionsInput = {
    set: string[]
  }

  export type UserAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserWrongdoingQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput> | UserWrongdoingQuestionCreateWithoutQuestionInput[] | UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput | UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserWrongdoingQuestionCreateManyQuestionInputEnvelope
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
  }

  export type UserAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
  }

  export type UserWrongdoingQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput> | UserWrongdoingQuestionCreateWithoutQuestionInput[] | UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput | UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserWrongdoingQuestionCreateManyQuestionInputEnvelope
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
  }

  export type QuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutQuestionInput | UserAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserWrongdoingQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput> | UserWrongdoingQuestionCreateWithoutQuestionInput[] | UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput | UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserWrongdoingQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserWrongdoingQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserWrongdoingQuestionCreateManyQuestionInputEnvelope
    set?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    disconnect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    delete?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    update?: UserWrongdoingQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserWrongdoingQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserWrongdoingQuestionUpdateManyWithWhereWithoutQuestionInput | UserWrongdoingQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
  }

  export type UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput> | UserAnswerCreateWithoutQuestionInput[] | UserAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserAnswerCreateOrConnectWithoutQuestionInput | UserAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserAnswerCreateManyQuestionInputEnvelope
    set?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    disconnect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    delete?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    connect?: UserAnswerWhereUniqueInput | UserAnswerWhereUniqueInput[]
    update?: UserAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserAnswerUpdateManyWithWhereWithoutQuestionInput | UserAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
  }

  export type UserWrongdoingQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput> | UserWrongdoingQuestionCreateWithoutQuestionInput[] | UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput | UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserWrongdoingQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserWrongdoingQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserWrongdoingQuestionCreateManyQuestionInputEnvelope
    set?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    disconnect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    delete?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    connect?: UserWrongdoingQuestionWhereUniqueInput | UserWrongdoingQuestionWhereUniqueInput[]
    update?: UserWrongdoingQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserWrongdoingQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserWrongdoingQuestionUpdateManyWithWhereWithoutQuestionInput | UserWrongdoingQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserAnswerCreateWithoutUserInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserAnswerCreateOrConnectWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    create: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserAnswerCreateManyUserInputEnvelope = {
    data: UserAnswerCreateManyUserInput | UserAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWrongdoingQuestionCreateWithoutUserInput = {
    id?: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
    question: QuestionCreateNestedOneWithoutWrongAnswersInput
  }

  export type UserWrongdoingQuestionUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserWrongdoingQuestionCreateOrConnectWithoutUserInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    create: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserWrongdoingQuestionCreateManyUserInputEnvelope = {
    data: UserWrongdoingQuestionCreateManyUserInput | UserWrongdoingQuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDashboardDataCreateWithoutUserInput = {
    id?: string
    totalPoints?: number
    previousSessionPoints?: number
    pointsHistory: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataUncheckedCreateWithoutUserInput = {
    id?: string
    totalPoints?: number
    previousSessionPoints?: number
    pointsHistory: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataCreateOrConnectWithoutUserInput = {
    where: UserDashboardDataWhereUniqueInput
    create: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
  }

  export type UserAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    update: XOR<UserAnswerUpdateWithoutUserInput, UserAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<UserAnswerCreateWithoutUserInput, UserAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAnswerWhereUniqueInput
    data: XOR<UserAnswerUpdateWithoutUserInput, UserAnswerUncheckedUpdateWithoutUserInput>
  }

  export type UserAnswerUpdateManyWithWhereWithoutUserInput = {
    where: UserAnswerScalarWhereInput
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAnswerScalarWhereInput = {
    AND?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
    OR?: UserAnswerScalarWhereInput[]
    NOT?: UserAnswerScalarWhereInput | UserAnswerScalarWhereInput[]
    id?: StringFilter<"UserAnswer"> | string
    userId?: StringFilter<"UserAnswer"> | string
    questionId?: StringFilter<"UserAnswer"> | string
    selectedAnswer?: StringFilter<"UserAnswer"> | string
    isCorrect?: BoolFilter<"UserAnswer"> | boolean
    timestamp?: DateTimeFilter<"UserAnswer"> | Date | string
  }

  export type UserWrongdoingQuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    update: XOR<UserWrongdoingQuestionUpdateWithoutUserInput, UserWrongdoingQuestionUncheckedUpdateWithoutUserInput>
    create: XOR<UserWrongdoingQuestionCreateWithoutUserInput, UserWrongdoingQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserWrongdoingQuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    data: XOR<UserWrongdoingQuestionUpdateWithoutUserInput, UserWrongdoingQuestionUncheckedUpdateWithoutUserInput>
  }

  export type UserWrongdoingQuestionUpdateManyWithWhereWithoutUserInput = {
    where: UserWrongdoingQuestionScalarWhereInput
    data: XOR<UserWrongdoingQuestionUpdateManyMutationInput, UserWrongdoingQuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWrongdoingQuestionScalarWhereInput = {
    AND?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
    OR?: UserWrongdoingQuestionScalarWhereInput[]
    NOT?: UserWrongdoingQuestionScalarWhereInput | UserWrongdoingQuestionScalarWhereInput[]
    id?: StringFilter<"UserWrongdoingQuestion"> | string
    userId?: StringFilter<"UserWrongdoingQuestion"> | string
    questionId?: StringFilter<"UserWrongdoingQuestion"> | string
    retestedCorrectly?: BoolFilter<"UserWrongdoingQuestion"> | boolean
    lastAttempted?: DateTimeFilter<"UserWrongdoingQuestion"> | Date | string
  }

  export type UserDashboardDataUpsertWithoutUserInput = {
    update: XOR<UserDashboardDataUpdateWithoutUserInput, UserDashboardDataUncheckedUpdateWithoutUserInput>
    create: XOR<UserDashboardDataCreateWithoutUserInput, UserDashboardDataUncheckedCreateWithoutUserInput>
    where?: UserDashboardDataWhereInput
  }

  export type UserDashboardDataUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDashboardDataWhereInput
    data: XOR<UserDashboardDataUpdateWithoutUserInput, UserDashboardDataUncheckedUpdateWithoutUserInput>
  }

  export type UserDashboardDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
  }

  export type UserDashboardDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    previousSessionPoints?: IntFieldUpdateOperationsInput | number
    pointsHistory?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateWithoutAnswersInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    wrongQuestions?: UserWrongdoingQuestionCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnswersInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    wrongQuestions?: UserWrongdoingQuestionUncheckedCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    wrongAnswers?: UserWrongdoingQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    wrongAnswers?: UserWrongdoingQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserUpsertWithoutAnswersInput = {
    update: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
    create: XOR<UserCreateWithoutAnswersInput, UserUncheckedCreateWithoutAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnswersInput, UserUncheckedUpdateWithoutAnswersInput>
  }

  export type UserUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    wrongQuestions?: UserWrongdoingQuestionUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    wrongQuestions?: UserWrongdoingQuestionUncheckedUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongAnswers?: UserWrongdoingQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongAnswers?: UserWrongdoingQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutWrongQuestionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWrongQuestionsInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    dashboard?: UserDashboardDataUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWrongQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWrongQuestionsInput, UserUncheckedCreateWithoutWrongQuestionsInput>
  }

  export type QuestionCreateWithoutWrongAnswersInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    answers?: UserAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutWrongAnswersInput = {
    id?: string
    text: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: string
    topic: string
    createdAt?: Date | string
    answers?: UserAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutWrongAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutWrongAnswersInput, QuestionUncheckedCreateWithoutWrongAnswersInput>
  }

  export type UserUpsertWithoutWrongQuestionsInput = {
    update: XOR<UserUpdateWithoutWrongQuestionsInput, UserUncheckedUpdateWithoutWrongQuestionsInput>
    create: XOR<UserCreateWithoutWrongQuestionsInput, UserUncheckedCreateWithoutWrongQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWrongQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWrongQuestionsInput, UserUncheckedUpdateWithoutWrongQuestionsInput>
  }

  export type UserUpdateWithoutWrongQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWrongQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    dashboard?: UserDashboardDataUncheckedUpdateOneWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutWrongAnswersInput = {
    update: XOR<QuestionUpdateWithoutWrongAnswersInput, QuestionUncheckedUpdateWithoutWrongAnswersInput>
    create: XOR<QuestionCreateWithoutWrongAnswersInput, QuestionUncheckedCreateWithoutWrongAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutWrongAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutWrongAnswersInput, QuestionUncheckedUpdateWithoutWrongAnswersInput>
  }

  export type QuestionUpdateWithoutWrongAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutWrongAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutDashboardInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerCreateNestedManyWithoutUserInput
    wrongQuestions?: UserWrongdoingQuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardInput = {
    id?: string
    email: string
    name?: string | null
    avatar?: string | null
    answers?: UserAnswerUncheckedCreateNestedManyWithoutUserInput
    wrongQuestions?: UserWrongdoingQuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardInput, UserUncheckedCreateWithoutDashboardInput>
  }

  export type UserUpsertWithoutDashboardInput = {
    update: XOR<UserUpdateWithoutDashboardInput, UserUncheckedUpdateWithoutDashboardInput>
    create: XOR<UserCreateWithoutDashboardInput, UserUncheckedCreateWithoutDashboardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardInput, UserUncheckedUpdateWithoutDashboardInput>
  }

  export type UserUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUpdateManyWithoutUserNestedInput
    wrongQuestions?: UserWrongdoingQuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    answers?: UserAnswerUncheckedUpdateManyWithoutUserNestedInput
    wrongQuestions?: UserWrongdoingQuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAnswerCreateWithoutQuestionInput = {
    id?: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAnswersInput
  }

  export type UserAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserAnswerCreateOrConnectWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    create: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswerCreateManyQuestionInputEnvelope = {
    data: UserAnswerCreateManyQuestionInput | UserAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserWrongdoingQuestionCreateWithoutQuestionInput = {
    id?: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
    user: UserCreateNestedOneWithoutWrongQuestionsInput
  }

  export type UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserWrongdoingQuestionCreateOrConnectWithoutQuestionInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    create: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserWrongdoingQuestionCreateManyQuestionInputEnvelope = {
    data: UserWrongdoingQuestionCreateManyQuestionInput | UserWrongdoingQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    update: XOR<UserAnswerUpdateWithoutQuestionInput, UserAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserAnswerCreateWithoutQuestionInput, UserAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserAnswerWhereUniqueInput
    data: XOR<UserAnswerUpdateWithoutQuestionInput, UserAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type UserAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: UserAnswerScalarWhereInput
    data: XOR<UserAnswerUpdateManyMutationInput, UserAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserWrongdoingQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    update: XOR<UserWrongdoingQuestionUpdateWithoutQuestionInput, UserWrongdoingQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserWrongdoingQuestionCreateWithoutQuestionInput, UserWrongdoingQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserWrongdoingQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserWrongdoingQuestionWhereUniqueInput
    data: XOR<UserWrongdoingQuestionUpdateWithoutQuestionInput, UserWrongdoingQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type UserWrongdoingQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: UserWrongdoingQuestionScalarWhereInput
    data: XOR<UserWrongdoingQuestionUpdateManyMutationInput, UserWrongdoingQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserAnswerCreateManyUserInput = {
    id?: string
    questionId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserWrongdoingQuestionCreateManyUserInput = {
    id?: string
    questionId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserAnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutWrongAnswersNestedInput
  }

  export type UserWrongdoingQuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerCreateManyQuestionInput = {
    id?: string
    userId: string
    selectedAnswer: string
    isCorrect: boolean
    timestamp?: Date | string
  }

  export type UserWrongdoingQuestionCreateManyQuestionInput = {
    id?: string
    userId: string
    retestedCorrectly?: boolean
    lastAttempted?: Date | string
  }

  export type UserAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    selectedAnswer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWrongQuestionsNestedInput
  }

  export type UserWrongdoingQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWrongdoingQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    retestedCorrectly?: BoolFieldUpdateOperationsInput | boolean
    lastAttempted?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}