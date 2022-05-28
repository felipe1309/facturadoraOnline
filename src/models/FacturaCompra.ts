import {Schema,model,models} from 'mongoose'
const ModeloProductoCompra = new Schema({
    cantidad:{
        type:Number,
        required:true,
        default:0
    },
    id:{
        type:Schema.Types.ObjectId,
        require:true
    }

})
export const facturaCompra = new Schema({
    listaProductosVendidos:{
        type:[ModeloProductoCompra],
        default:[],
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})
export default models.FacturaCompra || model('FacturaCompra',facturaCompra)