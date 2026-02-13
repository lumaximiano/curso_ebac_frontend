const alunos = [
    { nome: 'Lucas', nota: 9 },
    { nome: 'Amanda', nota: 10 },
    { nome: 'Miguel', nota: 8 },
    { nome: 'Gustavo', nota: 4 },
    { nome: 'Levi', nota: 5 }
];

const filtrarAprovados = (listaDeAlunos) => {
    return listaDeAlunos.filter(aluno => aluno.nota >= 7 );
}

const alunosAprovados = filtrarAprovados(alunos);

console.log(alunosAprovados);