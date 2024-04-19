import DataSocket from '../models/dataSocket.model.js';
const dataSocketDAO = {};
dataSocketDAO.getAll = async() =>{
    console.log("estás en getAll")
    const garments = await DataSocket.find();
    return garments;
};
dataSocketDAO.getOne = async(id) =>{
    console.log("estás en getOne")
    const garment = await DataSocket.findOne({_id: id});
    return garment;
};
dataSocketDAO.insertOne = async(data) =>{ 
    console.log("estás en insertOne")
    console.log(data)
    return await DataSocket.create(data);
};
dataSocketDAO.insertMany = async(datas) =>{ 
    console.log("estás en insertmany")
    console.log(datas)
    return await DataSocket.insertMany(datas);
};
// dataSocketDAO.updateOne= async(barcode, garment) =>{ 
//     console.log("estás en updateOne")
//     const updatee = await DataSocket.findOneAndUpdate({barcode:barcode}, garment)
//     console.log(updatee)
//     return updatee
    
    
// };
dataSocketDAO.deleteOne= async(id) =>{ 
    console.log("estás en deleteOne")
    return await DataSocket.findOneAndDelete({_id:id})
     
};
export default dataSocketDAO;