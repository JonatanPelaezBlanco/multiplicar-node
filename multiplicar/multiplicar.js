const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    })
}

let listarTabla = (base, limite) => {

    console.log(`===== Tabla de ${ base }=====`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}