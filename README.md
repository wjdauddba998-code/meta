# Linkprice × Meta 협력광고 웹 제안서

GitHub Pages 배포용 정적 웹 프레젠테이션입니다.

## 구성
- `index.html` : 20개 화면의 제안서 본문
- `styles.css` : Meta 계열 블루/그라데이션 기반 디자인
- `script.js` : 좌우 키보드, 버튼, 모바일 스와이프, 목차 이동
- `assets/` : 기존 PDF 레퍼런스 이미지

## GitHub Pages 배포
1. GitHub에서 새 Public repository를 생성합니다. 예: `meta-collab-ads`
2. 이 폴더의 파일을 repository 최상위에 업로드합니다.
3. `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch` 선택
5. Branch를 `main`, 폴더를 `/(root)`로 선택 후 Save
6. 배포 완료 후 `https://<github-id>.github.io/meta-collab-ads/` 형태로 접속합니다.

## 조작
- 키보드 `←` `→` : 이전/다음
- `Home` / `End` : 처음/마지막
- 모바일 : 좌우 스와이프
- 우측 상단 `목차` : 전체 슬라이드 바로가기
