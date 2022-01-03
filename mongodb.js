const mongoose = require('mongoose');
const express = require('express');
const { response } = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/expense-tracker').then(()=>console.log('connection successful')).catch((e)=>console.log('Not successful'));

app.use(express.json());
const schema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
const Expense=new mongoose.model('Expense',schema);

app.get('/',async(req,res)=>{
    const expenses=await Expense.find({});
    res.send(expenses);
});
// app.post("/",async(req,res)=>{
//     try{
//         let title=req.body.title;
//         let date=req.body.title;
//         let amount=req.body.amount;
//         const expense_item={
//             title: title,
//             date: date,
//             amount: amount
//         }
//         const result=await expense_item.save();
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// });
app.listen(3000,(e)=>console.log(e));