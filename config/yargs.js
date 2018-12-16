const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default:true,
    alias: 'c',
    type: 'boolean',
    desc: 'marca como completado o pendiente'
};
const filter = {
    default: undefined,
    alias: 'c',
    type: 'boolean',
    desc: 'filter'
};


const argv = require('yargs')
    .command('gettasks', 'get tasks', {
        filter
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .command('borrarFernando', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;



/* const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion : {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado :{
            default:true,
            alias: 'c',
            desc: 'marca como completado o pendiente'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion : {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('borrarFernando', 'borra una tarea', {
        descripcion : {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .help()
    .argv;
 */



module.exports = {
    argv
}

    //module.export.argv = argv;