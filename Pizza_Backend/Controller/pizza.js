const pizza = require('../Model/pizza')
async function AddPizza(req,res){
    console.log(req.body,'AAAAA')
const data = new pizza({
    ...req.body
})
data.save()
res.send({err:0,msg:"Prpduct is Added Successfully"})
}

async function GetData(req,res){
    const data = await pizza.find()
    res.send(data       )
}
async function GetDataById(req,res){

    const data = await pizza.findById({_id:req.body.id})
    
    res.send(data)
    }
    async function UpdatePizzadata(req,res){
        console.log(req.body)
        const id = req.body._id
 const data = await  pizza.findOneAndUpdate({ _id: id }, { $set: { ...req.body } })
res.send({msg:"Data Update Successfully"})
    }
    async function Delete(req,res){
       
await pizza.findOneAndDelete({_id:req.body.id})
res.send({msg:"Deleted Successfully"})  
    }
module.exports ={AddPizza,GetData,GetDataById,UpdatePizzadata,Delete}
