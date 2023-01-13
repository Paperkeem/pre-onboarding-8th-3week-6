# 🔍 검색창/검색어 추천 기능 구현 (6팀)

## 📌 [배포주소](https://pre-onboarding-8th-3week-6.vercel.app/)

</br>

## Team
<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338752-939b2522-7b0a-4e7c-9ef4-85d957ec8f7c.jpeg" width="130px;" alt=""/><br /><sub><b>강태훈</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338696-72b9433d-2ed5-4954-b9ce-ef444aa662eb.jpeg" width="130px;" alt=""/><br /><sub><b>김민정</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="130px;" alt=""/><br /><sub><b>김종이</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338676-3e3b273b-5860-4eed-b971-1a26a9572e74.png" width="130px;" alt=""/><br /><sub><b>이상현</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338768-2d0c7044-dc9e-4379-b9a9-bd7252e13287.png" width="130px;" alt=""/><br /><sub><b>이요한</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="https://user-images.githubusercontent.com/107424974/212338810-22a9d6cf-8073-45f5-a45a-a1025011d445.jpeg" width="130px;" alt=""/><br /><sub><b>이조은</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

#### 🗓 일정 : 2023.01.10 - 01.13

</br>

## [기능 상세 위키 바로가기](https://github.com/wanted-onboarding8-6/pre-onboarding-8th-3week-6/wiki)

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# yarn
yarn install
```

```bash
# local DB
yarn json-server --watch db.json --port 4000
```

```.env
REACT_APP_BASE_SEARCH_URL="http://localhost:4000/sick?q="
```

```bash
# start project
yarn start
```

<br>

## 🛠 Used Tools

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/JsonServer-000000?style=flat&logo=JSON&logoColor=white"/>
    <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white"/>
</div>

<br>

## 구현사항

1. 질환명 검색시 API 호출을 통해 검색어 추천 기능 구현
   - 사용자가 입력한 텍스트와 일치하는 부분은 bold 처리
   - input focus시 localStorage를 이용해 최근 검색어 노출
   - 일치하는 검색 결과가 없는 경우의 UI 표시

</br>

2. API 호출 최적화
   - keyUp/keyDown event를 통해 사용자의 키 입력이 끝나고 일정 시간 지연시간을 준 뒤, API 호출을 통해 해당하는 값에 대한 요청값 반환
   - 띄어쓰기만 있는 string, 완성되지 않은 문자(자음 모음 분리)의 경우 API 호출을 하지 않는 등의 호출 조건 추가
   - CacheStorage를 이용해 동일한 요청의 값은 캐시를 통해 반환

</br>

3. 키보드만으로도 추천/최근 검색어로 이동 가능
   - tab키 or 화살표 방향키 상하 조작으로 이동 가능
   - 추천 검색어로 키보드 이동 후 Enter 입력 시 submit => 최근 검색어 localStorage로 저장
   - 추천 검색어 마우스 클릭 시, 해당 키워드를 input의 value로 이동

</br></br>

## 디렉토리 구조

```
📂 pre-onboarding-8th-3week-6
┣ 📂 public
┣ 📂 src
┃   ┣ 📂 apis             # api 호출 관련
┃   ┣ 📂 components       # component 모음
┃   ┣ 📂 hooks            # custom hook
┃   ┣ 📂 image            # 이미지 파일들
┃   ┣ 📂 lib              # fetch 함수 디렉토리
┃   ┣ 📂 types            # type 정의 모음
┃   ┗ 📂 util             # util 함수 모음
┗ 📄 README.md            # README 파일
```
