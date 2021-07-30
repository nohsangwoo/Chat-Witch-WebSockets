// 현재 백엔드와 프론트가 같은 host에 위치하니깐 window.location.host로 서버의 host를 알아내서 접속시킴
const socket = new WebSocket(`ws://${window.location.host}`);
