import { Schema } from "mongoose";

export const ReservaSchema = new Schema({
    nroFactura: {type: String, required: true},
    fechaFactura: {type: Date, required: true},
    tiempoAlquiler: {type: Number, required: true},
    valor: {type: Number, required: true}
});

