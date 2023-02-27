## 학습계획
1. 공통 프로젝트 저장소를 fork 하고 PR을 오픈해서 mergr하는 방법을 테스트해본다.
2. git 용어 및 명령어를 학습해본다.
3. mit 명령어를 하나씩 구현하고 PR을 생성한다.
## 학습내용
### git 용어
- **remote**  
  remote 저장소 : 원격 저장소, PC가 아닌 다른 원격의 저장소, github에 만든 repository가 원격 저장소이다.
- **local**  
  local 저장소 : 현재 PC에 존재하는 저장소
- **init**  
  `git init` : 로컬 저장소를 원격 저장소와 연결하기 위해 제일 처음 사용하는 명령어로 `git init`을 실행하면 현재
  디렉토리에 `.git` 디렉토리를 생성한다. 이를 저장소를 초기화한다고 하고 git 명령어를 사용할 수 있게 된다.
- **clone**  
  원격 저장소의 데이터를 로컬 저장소로 복제하는 기능으로  
  `git clone {원격 저장소 주소} [디렉토리명]` 명령어로 복제할 수 있다.