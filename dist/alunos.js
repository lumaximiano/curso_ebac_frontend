"use strict";

var alunos = [{
  nome: 'Lucas',
  nota: 9
}, {
  nome: 'Amanda',
  nota: 10
}, {
  nome: 'Miguel',
  nota: 8
}, {
  nome: 'Gustavo',
  nota: 4
}, {
  nome: 'Levi',
  nota: 5
}];
var filtrarAprovados = function filtrarAprovados(listaDeAlunos) {
  return listaDeAlunos.filter(function (aluno) {
    return aluno.nota >= 7;
  });
};
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);