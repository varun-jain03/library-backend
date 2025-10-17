const express = require('express');
require('dotenv').config();
const { connectDB } = require('./config/db.js');
const { authRoutes } = require('./routes/auth.routes.js');
const { bookRoutes } = require('./routes/book.routes.js');
const { myBookRoutes } = require('./routes/myBook.routes.js');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/books');
app.use('/mybooks', myBookRoutes);



app.listen(8080, () => {
    connectDB();
    console.log('the server is running on http://localhost:8080');
})