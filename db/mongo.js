import mongoose from 'mongoose'

const uri = 'mongodb://localhost/coffee';
mongoose.connect(uri).then(
    () => { console.log('MongoDB success connection..')},
    err => { console.log('Error : ' + err)}
)

export default mongoose;
