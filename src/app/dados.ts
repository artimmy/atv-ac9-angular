export class Aluno {
nome: string;
sexo?: string;
}
export class Disciplina {
nome: string;
carga: number;
}
export class Matricula {
aluno: Aluno;
disciplina: Disciplina;
nota: number;
}