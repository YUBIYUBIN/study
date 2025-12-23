# AST(추상 문법 트리)

# AST란?

> **Abstract Syntax Tree는 소스 코드를 의미 있는 구조로 분해해 트리로 표현한 것이다!**
> 
> - **Abstract** :실제 코드의 세부 문법 요소(예: 세미콜론, 괄호)는 일부 생략하고,
> - **Syntax**(문법):  코드가 가진 구조를
> - **Tree**: node와 branch로 표현한 것이다.

<aside>
🐱

우리가 js코드를 치면, 컴퓨터는 문자열 그대로의 의미를 이해하지 못하기 때문에,  내부적으로 js엔진이 **AST를 자동으로 만들어서 처리**한다! 

⇒ 내부적으로 문자열 → AST → 실행 흐름이 항상 존재한다.

</aside>

# AST 생성 과정

## **1️⃣ 코드 입력**

```jsx
let x = 10 + 5;
```

## **2️⃣ Tokenizer**

- 입력된 문자열(소스코드)을 쪼개서 Token으로 나눈다!
    - Token이란? 의미 있는 최소 단위를 말한다.

```jsx
[ 'let', 'x', '=', '10', '+', '5', ';' ]
```

## 3️⃣ Lexer (Lexical Analyzer)

- 각 Token의 타입과 의미를 분석한다.
    - lexical: 사전적, 의미

```jsx
[
  { type: 'Keyword', value: 'let' },
  { type: 'Identifier', value: 'x' },
  { type: 'Operator', value: '=' },
  { type: 'Number', value: 10 },
  { type: 'Operator', value: '+' },
  { type: 'Number', value: 5 },
  { type: 'Punctuation', value: ';' }
]
```

<aside>
🐱

Tokenizer과 Lexer은 하나의 단계로 합쳐서 구현하는 경우도 많다!

</aside>

## **4️⃣ Parser(Syntax Analyzer)**

- Lexer로 만든 Token 시퀀스로 트리구조(AST)를 형성한다.

```jsx
{
  type: 'VariableDeclaration',
  identifier: 'x',
  init: { //초기화
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'Number', value: 10 },
    right: { type: 'Number', value: 5 }
  }
}
```

---