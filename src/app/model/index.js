import { Schema, Model } from 'mongoose'

const schema = Schema

const diabete = new schema({
    pregnancy:Number,
    glucozo:Number,
    age:Number,
    BMI:Number,
    diabeteFunction:{typeof: Number, default:3},
    insulin:Number,
    bloodPresure:Number,
    height:{typeof : Number, default :170}
})
export default Model('diabete',diabete)


