require('dotenv').config();
const express = require('express');
const app = express();                                             
const port = process.env.PORT;                                           
app.use(express.json());
const path = require('path');
const imagePath = path.join(__dirname,'image');
app.use('/image',express.static(imagePath));

const mongoose = require('mongoose');

const adminRoutes = require('./Routes/Admin/index.routes');
app.use('/api/admin', adminRoutes);

const userRoutes = require('./Routes/User/index.routes');
app.use('/api/user', userRoutes);


// DATABASE COLLECTION
async function main() {
    await mongoose.connect(process.env.MONGO_DB);
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});