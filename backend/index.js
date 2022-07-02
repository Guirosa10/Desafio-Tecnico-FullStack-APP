const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/index');
require('dotenv').config();

const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

app.use(router.userRouter);

app.use((err, _req, res, _next) => {
	if (err.status) return res.status(err.status).json({ message: err.message });
	return res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
	console.log(`LISTENING ON PORT ${PORT}`);
});