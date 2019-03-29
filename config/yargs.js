const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la talba de multiplicar', opt)
    .command('crear', 'Crea un archivo de texto con la tabla de multiplicar', opt)
    .argv;

module.exports = {
    argv
}