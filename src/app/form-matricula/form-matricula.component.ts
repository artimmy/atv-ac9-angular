import { Component, OnInit } from "@angular/core";
import { ServicoService } from "../servico.service";
import { Matricula } from "../dados";

@Component({
  selector: "app-form-matricula",
  templateUrl: "./form-matricula.component.html",
  styleUrls: ["./form-matricula.component.css"]
})
export class FormMatriculaComponent implements OnInit {
  private matricula: Matricula;
  constructor(private servico: ServicoService) {}
  ngOnInit() {
    this.matricula = new Matricula();
  }
  salvar(){
    this.servico.addMatricula(this.matricula);
    this.matricula = new Matricula(); /* cria uma nova matricula */
  }
  excluir(matricula: Matricula){
    this.servico.removeMatricula(matricula);
    return false; /* para evitar o popup menu */
  }
}
