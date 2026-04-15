//foreach
let lista = ['Lucas',16,'macã', true];
console.log(lista);
console.log(lista[1]);
lista.push('carlos'); // adicionar no fim da lista
console.log(lista);
lista.unshift('pera') // adicionar no começo da lista
console.log(lista)
lista.pop();// remove do final da lista
console.log(lista);
lista.shift(); // remove do inicio da lista
console.log(lista);
lista.reverse(); // inverte a ordem da lista
console.log(lista);
console.log(lista.length) // mostra o 'comprimento' da lista
lista.push([2], 'jose');
console.log(lista);
lista.splice(1,0, 'carlos'); // adiciona no meio da lista
console.log(lista);