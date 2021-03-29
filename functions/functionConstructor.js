/* 
    Funçaõ Construtora

    *expressão new
    *criar um novo objeto
    *this keyword

*/

function Person(name){
    this.name = name;
    this.walk = function(){
        return 'andando'
    }
}

const Eron = new Person('Eron')
const Jose = new Person('Jose')

console.log(Eron)