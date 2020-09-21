import { Component, OnInit } from "@angular/core";
import { ServicoService } from "../servico.service";
import { Disciplina } from "../dados";

@Component({
  selector: "app-form-disciplina",
  templateUrl: "./form-disciplina.component.html",
  styleUrls: ["./form-disciplina.component.css"]
})
export class FormDisciplinaComponent implements OnInit {
  private disciplina: Disciplina;
  constructor(private servico: ServicoService) {}
  ngOnInit() {
    this.disciplina = new Disciplina();
  }
  salvar() {
    this.servico.addDisciplina(this.disciplina);
    this.disciplina = new Disciplina(); /* cria uma nova disciplina */
  }
  excluir(disciplina: Disciplina) {
    this.servico.removeDisciplina(disciplina);
    return false; /* para evitar o popup menu */
  }

}
