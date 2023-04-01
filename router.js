const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/',(req,res)=>{

   
   conexion.query('select * from producto',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results : results});
        }
    }); 
})

//RUTA PARA CREAR REGISTROS

router.get('/create',(req,res)=>{
    res.render('create');
})
module.exports = router