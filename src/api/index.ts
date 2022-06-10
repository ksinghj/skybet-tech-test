const api = new WebSocket('ws://localhost:8889')

api.addEventListener('message', e => console.log(JSON.parse(e.data))) // logs all data to console

export default api
