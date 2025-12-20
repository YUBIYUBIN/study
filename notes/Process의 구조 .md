# Process의 구조

> 프로그램이 실행되면 → 프로세스가 되고 → 프로세스 안에 메모리 구조(텍스트/힙/스택)가 생기며 → 그 안에서 스레드가 실제로 일을 한다.
> 

# Program이란?

> disk에 저장된 정적인 파일로, 실행되기 전 상태이다.
> 

<aside>
🐱

아직 **메모리도 안 쓰고**, **CPU도 안 쓴다!**

</aside>

# Process란?

> process는 실행 중인 프로그램 + 그 프로그램을 실행하기 위해 운영체제가 관리하는 정보다!
> 

![image.png](Process%EC%9D%98%20%EA%B5%AC%EC%A1%B0/image.png)

![image.png](Process%EC%9D%98%20%EA%B5%AC%EC%A1%B0/image%201.png)

# Process의 구성

> process는 크게 memory, thread, PCB 세 부분으로 나뉜다!
> 

# 1️⃣ Memory (Address Space)

> Process는 Code-Data-Heap-Stack 구조의 자기만의 독립된 가상 메모리 공간을 가진다!
> 

![image.png](Process%EC%9D%98%20%EA%B5%AC%EC%A1%B0/8bc15494-c6c6-4488-9ba0-b1dbb5c5e675.png)

### 1-1. Code: 실행할 코드

- 읽기 전용
- 같은 program이면 process 간 공유 가능

### 1-2. Data: 전역 변수, static 변수

- 프로그램 시작 시 할당
- 종료 시 해제

### 1-3. Heap: 동적 메모리

- **동적 메모리**
- 객체, 배열, new / malloc

```jsx
const obj = {a:1 };

```

📌 특징

- 런타임 중 크기 변경
- 느리지만 유연
- 메모리 누수 위험

<aside>
🐱

JS에서는 GC가 관리하지만, 개념적으로는 여전히 Heap이다.

</aside>

### 1-4. Stack

- 함수 호출 정보
- 지역 변수
- 매개변수
- 리턴 주소

```jsx
functionfoo(x) {
let y =10;
}

```

📌 특징

- 함수 호출 시 push
- 함수 종료 시 pop
- 빠르지만 크기 제한 있음
- stack overflow 가능

## 2️⃣ Thread

> 한 개의 프로세스 안에서
> 
> 
> CPU에서 독립적으로 스케줄링될 수 있는 실행의 흐름을 Thread라고 한다.
> 
- Thread 끼리는 같은 process의 code, data, heap을 공유한다!
- Stack은 thread마다 따로 가지고 있다.

![image.png](Process%EC%9D%98%20%EA%B5%AC%EC%A1%B0/image%202.png)

## 3️⃣ PCB (운영체제 관리 정보)

예시) 

- 프로세서: 요리사
    - CPU의 core 1개가 요리사 1명 ⇒ core이 여러 개면 여러 명의 요리사가 동시에 일 가능!
- process: 만들어야하는 메뉴(1개)
    - process 1개는 메뉴 1종류
    - ex) process1: 햄버거, process2: 샌드위치
    
    <aside>
    🐱
    
    같은 메뉴(process)면, 같은 조리대(code, data, heap) 사용한다.
    
    </aside>
    
- thread: 하나의 메뉴 조리할 때 독립적으로 실행될 수 있는 흐름
    - ex) 햄버거 process- thread1: 번 굽기, thread2: 야채 조리, thread3: 패티 굽기
    
    <aside>
    🐱
    
    한 명의 요리사는 동시에 여러가지 일을 할 수 없다!
    ⇒ thread와 thread 간, process와 process 간을 돌아다니면서 조금씩 했다 멈췄다 하는 건 가능하다.
    
    </aside>