//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch(comando) {

    case 'crear' :
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

    case 'gettasks' :
    console.log('show all taks');
    let listado = porHacer.getListado(argv.filter);
    for ( let tarea of listado) {
        console.log('==============POR HACER==========='.green);
        console.log(tarea.descripcion);
        console.log('Estado:' ,tarea.completado);
        console.log('==================================='.green);
    }
    break;

    case 'actualizar' :
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
    
    case 'borrar' :
    console.log('delete a task');
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;

    case 'borrarFernando' :
    let borrado2 = porHacer.borrarFernando(argv.descripcion);
    console.log(borrado2);
    break;

    default:
    console.log('command uknown');
}