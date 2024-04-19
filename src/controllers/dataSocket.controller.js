import dataSocketDAO from "../dao/dataSocket.dao.js";
 export const getAll=(req,res)=>{
    dataSocketDAO.getAll()
        .then(datas=> res.json({datas}))
        .catch(err=> res.json({error:"Server not available, we can't show all the data"}))
 }
 export const getOne=(req,res)=>{

    dataSocketDAO.getOne(req.params.id)
        .then(garment=> res.json({garment:garment}))
        .catch(err=> res.json({
            status:"Server not available, we can't show garment"
        }))
 }

 export const insertOne=(req,res)=>{

    console.log(req.body)
    dataSocketDAO.insertOne(req.body)
    .then(result=> 
        res.json({status: "DataSocket saved"}))
    .catch(err=> res.json({ error:"DataSocket not saved, please try again"}))
 }
 export const insertMany=(req,res)=>{

    console.log(req.body)
    dataSocketDAO.insertMany(req.body)
    .then(result=> 
        res.json({status: "Data Sockets saved"}))
    .catch(err=> res.json({ error:"Data Sockets not saved, please try again"}))
 }

//  export const updateOne = (req,res)=>{
//     garmentDAO.updateOne(req.params.barcode, req.body)
//         .then(garment => {
//             !garment ? res.json({
//                 message:"Garment not found, try with a valid barcode"
//             }) : res.json({status: "Garment updated"})
//         })
//         .catch(err=> res.status(500).json({ error: err }))
//  }
 export const deleteOne = (req,res)=>{
    dataSocketDAO.deleteOne(req.params.id)
        .then(garment => {
            !garment ? res.json({
                message:"DataSocket not found, try with a valid barcode for delete"
            }) : res.json({status: "DataSocket deleted"})
        })
        .catch(err=> res.json({ error:"DataSocket not deleted, try again"}))
 }

