const conexion = require('../database/db');

exports.save = (req,res)=>{
    const id_producto = req.body.id_producto;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;

    conexion.query('INSERT INTO producto SET ?', {id:id_producto, nombre:nombre,precio:precio,cantidad:cantidad},(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}