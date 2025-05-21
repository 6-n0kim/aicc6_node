const PORT = 8000;

const express = require('express'); // express 모듈 호출
const cors = require('cors'); // cors 모듈 호출

const app = express(); //express 모듈의 기능을 사용하기위해 변수에 객체 할당
app.use(express.json()); //json 형식의 데이터를 해석할 수 있도록 미들웨어 정의
app.use(cors()); //교차 출처 데이터 공유 허용

app.get('/', (request, response) => { //파라미터는 사용하지 않더라도 순서에 맞춰 적어준다.
    response.send('hello node, this is root page') //브라우저에 표시되는 응답 메시지
})

app.use(require('./routes/getRoutes'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))