const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 5000;

// middleware
app.use(cors());

const users=[
    {id:1, name:'sumon', email:'sumon@gmail.com'},
    {id:2, name:'moonmoon', email:'monmon@gmail.com'},
    {id:3, name:'kajol', email:'kajol@gmail.com'}
]

app.get('/users', (req, res)=>{
    res.send(users);
})

app.get('/', (req, res)=>{
    res.send('e-Shop is running...')
});

app.listen(port, ()=>{
    console.log(`eShop API is running on port: ${port}`)
});