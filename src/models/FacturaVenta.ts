import {Schema,model,models} from 'mongoose'
const ModeloProductoVenta = new Schema({
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
export const facturaVenta = new Schema({
    listaProductosVendidos:{
        type:[ModeloProductoVenta],
        default:[],
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})
export default models.FacturasVentas || model('FacturasVentas',facturaVenta)