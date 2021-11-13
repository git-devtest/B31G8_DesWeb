import { Document } from 'mongoose';

export interface IStudent extends Document{
    readonly nroFactura: string;
    readonly fechaFactura: Date;
    readonly tiempoAlquiler: number;
    readonly valor: number;
}