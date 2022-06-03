import {Schema,model,models} from 'mongoose'
export const facturaCompra = new Schema({
    listaProductosVendidos:{
        type:[String],
        default:[],
        required:true
    },
    total:{
        type:Number,
        required:true
    }
})
export default models.FacturaCompra || model('FacturaCompra',facturaCompra)