import { Component, OnInit } from "@angular/core";
import { ServicoService } from "../servico.service";
import { Aluno } from "../dados";

@Component({
  selector: "app-form-aluno",
  templateUrl: "./form-aluno.component.html",
  styleUrls: ["./form-aluno.component.css"]
})
export class FormAlunoComponent implements OnInit {
  private aluno: Aluno;
  constructor(private servico: ServicoService) {}
  ngOnInit() {
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
  salvar() {
    this.servico.addAluno(this.aluno);
    this.aluno = new Aluno(); /* cria um novo aluno */
  }
  excluir(aluno: Aluno) {
    this.servico.removeAluno(aluno);
    return false; /* para evitar o popup menu */
  }
}
