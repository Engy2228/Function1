//Function Declaration

function getName1(name) {
  return `Имя равно ${name}`
}
console.log(getName1('Evgen'))
console.log(getName1('Ev'))
console.log(getName1('EvgenKa'))

//Function Expression

const getName2 = function(name) {
  return `Имя равно ${name}`
}
console.log(getName2('EvgenKa'))
console.log(getName2('Ev'))
console.log(getName2('Evgen'))

//Arrow function expression

const getName3 = (name) => `Имя равно ${name}`
console.log(getName3('Evgen'))
console.log(getName3('Ev'))
console.log(getName3('EvgenKa!!!'))