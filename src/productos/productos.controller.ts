import { Controller,Get , Post, Body} from '@nestjs/common';
import { conexion } from '../db';
@Controller('productos')
export class ProductosController {
    @Get()
     async traerProductos(){
        let [datos]=await conexion.query(
        "SELECT * FROM productos"
        )
        return {
            "productos":datos
        }
    }

    @Post()
     async guardarProducto(@Body() dato:any){
        let res=await conexion.query(
            "INSERT INTO  productos (nombre,precio,marca)values (?,?,?)",
            [dato.nombre,dato.precio,dato.marca]
        )
        return{
            "mensaje":"productos registrados correctamente",
            "dato":res
        }

    }

}

