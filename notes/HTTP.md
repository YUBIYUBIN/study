# HTTP

# HTTP란?

> HTTP는 HyperText Transfer Protocol로,  클라이언트와 서버가 데이터를 주고받기 위한 약속이다.
> 
- 항상 클라이언트가 먼저 요청(Request)을 보낸다 → 서버는 요청이 와야만 응답(Response)한다.

<aside>
🐱

**Hypertext란?** 
문서 안에 **다른 문서로 이동하는 연결(link)** 이 포함된 텍스트다.

- HTML은 Hypertext를 표현하는 언어다.
</aside>

# HTTP 요청/응답 구조

## 요청 구조

```graphql
GET /index.html HTTP/1.1
Host: [example.com](http://example.com/)
User-Agent: Mozilla/5.0
Accept: text/html

(빈 줄)
(Body - GET은 보통 없음)
```

**1. Request Line (첫 줄)**

- Method (GET, POST 등)
- Path
- HTTP 버전

**2. Headers**

- Host (매우 중요)
- User-Agent
- Accept

**3. 빈 줄**

**4. Body (선택)**

## 응답 구조

```graphql
HTTP/1.1 200 OK
Content-Length: 9460
Content-Type: text/html

<html>...</html>
```

1. **Status Line**
    - HTTP 버전
    - 상태 코드 (200, 301, 404 등)
2. **Headers**
    - Content-Length (⭐ Body 크기 판단)
    - Content-Type
3. **빈 줄**
4. **Body**

<aside>
🐱

상태 코드 의미

- 200: 정상
- 301: 리다이렉트
- 403: 금지
- 404: 없음
</aside>