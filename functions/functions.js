//Callback function

function sayMyName(name){

    console.log('antes de executar a funcao callback')

    name()

    console.log('Depois de executar o callback ')

}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)