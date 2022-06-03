import {Schema,model,models} from 'mongoose'
export const facturaVenta = new Schema({
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
export default models.FacturasVentas || model('FacturasVentas',facturaVenta)