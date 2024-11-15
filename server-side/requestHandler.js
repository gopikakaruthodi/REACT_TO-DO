import todoSchema from './todo.model.js'


export async function addTodo(req,res) {
    try {
            const{task}=req.body
            await todoSchema.create({task}).then(()=>{
                res.status(201).send({msg:"Successfully Added"})
            }).catch((error)=>{
                res.status(404).send({msg:error})
            })
    } catch (error) {
        console.log(error);
        
    }    
    
}
export async function displayTodo(req,res) {
    try {
        const{task}=req.body
        const data=await todoSchema.find()
        res.status(200).send(data)
        
    } catch (error) {
        res.status(404).send({msg:error})

        
    }    
    
}

export async function deleteTodo(req,res) {
    try {
        const _id=req.params
        await todoSchema.deleteOne({_id}).then(()=>{
            res.status(201).send({msg:"Successfully Deleted"})
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })
        
    } catch (error) {
        console.log(error);
        
        res.status(404).send({msg:error})

        
    }    
    
}