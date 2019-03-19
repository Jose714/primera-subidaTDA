const {obtenerPromedio, argv}= require('./archivo')
console.log(argv)

if(argv._[0]=='promedio'){
    console.log('el promedio es '+argv.n+'')
}else{
console.log('promedio no calculado')

}