# Map

> `Map`은 key**-value 쌍을 다루는 전용 컬렉션**이고, `Object`보다 기능이 넓고 안정적이다.
> 

---

# 1) Map 기본 생성

```jsx
const map = new Map();
```

---

# 2) 값 저장하기 — `set()`

```jsx
map.set("job", "engineer");
map.set(123, "numberKey");
map.set({ a: 1 }, "objectKey");
```

- `Map`은 **문자열뿐 아니라 숫자, 객체, 함수 등 모든 타입을 키로 사용**할 수 있다.
- `map.set("a", 1).set("b", 2).set("c", 3);` 과 같이 한 번에 여러 값을 저장할 수도 있다.

---

# 3) 값 읽기 — `get()`

```jsx
map.get("job");     // "engineer"
map.get(123);       // "numberKey"
map.get("noKey");   // undefined
```

---

# 4) 키 존재 여부 확인 — `has()`

```jsx
map.has("job");   // true
map.has("x");     // false
```

---

# 5) 키-값 삭제 — `delete()`

```jsx
map.delete("job");
```

- 모든 요소 제거 — `clear()`

```jsx
map.clear();
```

---

# 6) Map 크기 — `size`

```jsx
map.size;   // 요소 개수
```

---

# 7) Map 반복(iteration) `for…of`

## ① 전체 순회

```jsx
for (const [key, value] of map) {
  console.log(key, value);
}
```

## ② key만

```jsx
for (const key of map.keys()) {
  console.log(key);
}

```

## ③ 값만

```jsx
for (const value of map.values()) {
  console.log(value);
}
```

## ④ [키, 값] 쌍

```jsx
for (const entry of map.entries()) {
  console.log(entry);
}
```

---

# 8) Map과 Object 차이 한 번에 이해

| 비교 | Map | Object |
| --- | --- | --- |
| 키 타입 | 아무거나 가능 | 문자열/심볼 |
| 순서 | 입력 순서 유지 | 일부 규칙적으로 정렬됨 |
| 크기 | `size`로 바로 확인 | 직접 count 해야 함 |
| 반복 | 순회가 기본 지원 | 추가 과정 필요 |
| 성능 | 빈번한 삽입/삭제에 유리 | 구조 역전이 일어날 수 있음 |