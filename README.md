# Zoom Clone

Zoom Clone using nodeJS, webRTC and webSockets

## 0.2 server setup

    1) nodemon
    - npm install nodemon
    - 코드 변경사항이 있으면 자동으로 감지하고 서버를 재시작해줌
    - nodemon.json에 nodemon 설정파일에 설정사항 작성
    - package에서 nodemon실행 스크립트 작성 후 nodemon.json에서 실행하는 설정명령어(exec) 로 실행됨

    2) babel
    - npm install @babel/core @babel/cli @babel/node @babel/preset-env -D
    - 자바스크립트 최신문법을 사용할수있게 해준다(호환성)
    - babel.config.json에 config 사항 작성

    3) express
    - npm install express

    4) pug
    - npm install pug
