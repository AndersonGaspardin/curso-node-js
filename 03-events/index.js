const EventEmitter = require('events')
class Emitter extends EventEmitter{

}

const emitter = new Emitter()

/*const eventName = 'usuario:click'
emitter.on(eventName, function(click){
    console.log('um usuario cliclou', click)
emitter.emit(eventName, 'na barra de rolagem')
emitter.emit(eventName, 'no ok')
*/

/*let count =0
while (count<10){
     setInterval(function () {
    emitter.emit(eventName, 'no ok' + (count++))
}, 1000)
}
*/
const stdin = process.openStdin()

function main(){
    return new Promise(function (solve, reject){
        stdin.addListener('data', function(value){
        //console.log(`Voce digitou: ${value.toString().trim()}`)
        return solve(value)
        })
    })    
}

main().then(function (result){
    console.log('resultado: ', result.toString());
})

// promisse são usadas para uma unica execução , ocmo consulta em banco de dados ou apis
// events são usados para execução continua, como escutar o terminal, pra manipular clicks, arquivos ou outras informações
