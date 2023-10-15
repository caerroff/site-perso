const cors = require('cors');


const api = require('express')();
const PORT = 3000;
api.use(cors({
    origin: '*'
}));

api.listen(
    PORT,
    () => console.log(`API running on port http://localhost:${PORT}`)
)

api.get('/', (req, res) => {
    res.status(200).send({ message: 'Développeur React JS et Symfony' });
})