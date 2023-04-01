const mysql = require('mysql');

const conexion = mysql.createConnection({
    DB_HOST : 'containers-us-west-195.railway.app',
    DB_USER : 'root',
    DB_PASSWORD : 'mJ6MyMnULScMnk3Uhnyg',
    DB_NAME : 'railway'
})

conexion.connect((error)=>{
    
    if(error){
        console.error('El error de conexiòn es :' + error);
    }
    console.log('Conectado a la BD');
})

module.exports = conexion;