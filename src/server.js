import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const PORT = 3000;

const app = express();

app.set('view engine', 'pug');

// 기본적으로 보여주는 파일의 경로는 __dirname(server.js가 포함된 현재경로 기준)/views
// 즉 src/views 폴더안의 pug파일을 불러올수있게 해준다.
app.set('views', __dirname + '/views');

// 가상경로의 이름은 public이고 해당 가상경로로 포워딩해주는 실제 파일경로는 __dirname + '/public'이다.
app.use('/public', express.static(__dirname + '/public'));

// "/" 경로엔 home.pug 파일을 불러와 렌더링한다
app.get('/', (_, res) => res.render('home'));

// 사용자가 지정된 경로 이외의 경로를 요청시 "/"으로 리다이렉션 시켜줌
app.get('/*', (_, res) => res.redirect('/'));

const handleListen = () => console.log(`listeningon  :localhost:${PORT}`);

// http server 생성
const server = http.createServer(app);
// 일단 http 서버생성을 위한 소스

const wss = new WebSocket.Server({ server });

//  http server running...
server.listen(PORT, handleListen);
