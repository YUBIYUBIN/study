# try, catch, throw

```jsx
try {
에러 발생 → throw 됨 → try 즉시 중단
}
↓
catch(에러) {
		throw된 에러를 여기서 받음
		프로그램은 계속 진행
}
```

# 예외 처리 기본 구조

```jsx
try {
   // 문제가 생길 가능성이 있는 코드
} catch (error) {
   // 문제가 생겼을 때 실행되는 코드
} finally {
   // 문제가 있든 없든 무조건 실행되는 코드 (선택)
}
```

# 1️⃣  `try`

> 문제 날 가능성이 있는 코드를 넣는 구역이다.
내부에서 에러가 터지면 뒤쪽 코드는 실행되지 않고, 바로 `catch`로 넘어간다.
> 

```jsx
try {
  console.log("여기까지는 OK");
  JSON.parse("잘못된 JSON"); // 여기서 에러 발생
  console.log("여긴 실행 X");
}
```

# 2️⃣ `catch`

> `catch`는 `try`에서 발생한 에러를 받아서 처리한다.
> 

```jsx
catch (err) {
  console.log("에러 발생!");
  console.log(err.message);
}
```

여기서 `err`는 에러에 대한 정보가 담긴 객체예요.

# 3️⃣ `finally`

> 에러가 있든 없든 항상 실행된다.
> 

```jsx
finally {
  console.log("정리가 필요하면 여기에 넣음");
}
```

# 4️⃣ `throw`

> 직접 에러를 만들어서 던진다!
> 

```jsx
throw new Error("잘못된 입력입니다");
```

# Ex)

```jsx
function divide(a, b) {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없음"); // 직접 에러 발생
  }
  return a / b;
}

try {
  const result = divide(10, 0);  // 여기서 throw 발생
  console.log(result);           // 실행되지 않음
} catch (err) {
  console.log("문제 발생:", err.message);
} finally {
  console.log("끝!");
}

```

###