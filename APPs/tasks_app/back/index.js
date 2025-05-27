PORT = 8000;

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('this it the Tasks App Backend')
})

app.use(require('./routers/getRoutes'));
app.use(require('./routers/postRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});