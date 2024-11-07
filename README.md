# INSERT

설치 : npm i lodash
설치 : npm i --save-dev @types/lodash
설치 : npm i react-hook-form
설치 : npm i @tanstack/react-query

1. Create Database
   Database name : MONGODB_DATABASE="SBS"
   Collection name : schemaOptions: { collection: "post" },

2. \_server > insert.ts 생성 (데이터 만들기)

- 'use server' : 서버 사이드에서만 실행되는 코드를 명시할 때 사용
  (데이터베이스 작업, API호출)

- 'use client' : 클라이언트 사이드에서 실행되는 코드를 명시할 때 사용
  (HOOK사용, 이벤트 처리, 브라우저API사용 (window객체, localstorage))

API ? 서로 다른 프로그램들이 소통할 수 있게 하는 인터페이스
(클라이언트단과 서버단이 소통하게 해주는 중간다리역할)

---

# Read

#### GetPosts

1. board/[category]/page.tsx

현재 getPosts는 아래와 같이 인자를 삽입하여 데이터를 가져오려고 합니다.
아래에 맞게 getPosts API를 만들어주세요. (Mongoose는 쿼리 결과를 Mongoose Document 인스턴스로 반환하기 때문에 이 결과를 일반 자바스크립트 객체로 변환하려면 몽구스결과.toObject() 메서드를 사용하여야 합니다.)

- items : 현재 조건에 맞는 게시물들
- total : 전체 게시물 개수 -> total건의 게시물이 있습니다.

```bash
const { total, items: posts } = await getPosts({
   category: params.category,
   skip: (pageNumber - 1) * limit,
   limit,
});
```

3.  board/\_views/listView.tsx
    게시물 불러오는것에 맞춰 listView.tsx를 작성해주세요.

4.  공지 게시물이 먼저 뜨고 일반 게시물이 노출되게 API를 변경해주세요.
    또한, 공지 게시물이라면 번호에는 숫자가 아닌 '공지' 라고 뜨도록 변경해주세요.

5.  만약 게시물이 없다면, '게시물없음'이 뜨게 해주세요.

#### GetPost

1. board/[category]/[postId]/page.tsx

현재 getPost는 아래와 같이 인자를 삽입하여 데이터를 가져오려고 합니다.
아래에 맞게 getPosts API를 만들어주세요.

```bash
const post = await getPost({ id: params.postId });
```

---

# Create

board/[category]/write/\_views/writeForm.tsx
백엔드개발자가 createPost API를 완성하였습니다.
이를 활용하여 게시물 작성이 되도록 해보세요.

---

# Update

board/[category]/[postId]/edit/\_views/editForm.tsx
백엔드개발자가 updatePost API를 완성하였습니다.
이를 활용하여 게시물 수정이 되도록 해보세요.

---

# Delete

board/\_views/deleteButton.tsx
백엔드개발자가 DeletePost API를 완성하였습니다.
이를 활용하여 게시물 삭제가 되도록 해보세요.
