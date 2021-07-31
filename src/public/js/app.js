// dom control을 위해 돔 정보 불러오기
const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

// 현재 백엔드와 프론트가 같은 host에 위치하니깐 window.location.host로 서버의 host를 알아내서 접속시킴
const socket = new WebSocket(`ws://${window.location.host}`);

// nodejs 연결이 최초 성공하면 실행되는 이벤트
function handleOpen() {
  console.log('Connected to Server ✅');
}

socket.addEventListener('open', handleOpen);

// nodejs에서 전달받은 데이터가 있는경우 작동하는 이벤트
socket.addEventListener('message', message => {
  console.log('New message: ', message.data);
});

// nodejs 연결이 끊기면 작동하는 이벤트
socket.addEventListener('close', () => {
  console.log('Disconnected from Server ❌');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  console.log(input.value);
  // socket연결된 backend로 데이터 전송 (backend에선 message 트리거가 작동한다)
  socket.send(input.value);
  input.value = '';
}

messageForm.addEventListener('submit', handleSubmit);
