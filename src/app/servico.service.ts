import { Injectable } from "@angular/core";
import { Aluno, Disciplina, Matricula } from "./dados";

@Injectable()
export class ServicoService {
  public alunos: Aluno[] = [
    { nome: "Ana", sexo: "Feminino" },
    { nome: "Pedro", sexo: "Masculino" }
  ];
  public disciplinas: Disciplina[] = [
    { nome: "Álgebra", carga: 80 },
    { nome: "Algoritmo", carga: 80 }
  ];
  public matriculas: Matricula[] = [];
  constructor() {}
  addAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
  }
  removeAluno(aluno: Aluno) {
    /* procura o objeto obj na lista */
    let indice = this.alunos.indexOf(aluno, 0);
    if (indice > -1) {
      this.alunos.splice(indice, 1); /* remove da lista */
    }
  }
  addDisciplina(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }
  removeDisciplina(disciplina: Disciplina) {
    let indice = this.disciplinas.indexOf(disciplina, 0);
    if (indice > -1) {
      this.disciplinas.splice(indice, 1);
    }
  }
  addMatricula(matricula: Matricula): void {
    this.matriculas.push(matricula);
  }
  removeMatricula(matricula: Matricula) {
    let indice = this.matriculas.indexOf(matricula, 0);
    if (indice > -1) {
      this.matriculas.splice(indice, 1);
    }
  }
}
