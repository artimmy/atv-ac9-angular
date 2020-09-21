import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FormAlunoComponent } from "./form-aluno/form-aluno.component";
import { FormDisciplinaComponent } from "./form-disciplina/form-disciplina.component";
import { FormMatriculaComponent } from "./form-matricula/form-matricula.component";
import { ServicoService } from "./servico.service";

import { RouterModule, Routes } from "@angular/router";
/* definição das rotas */
const rotas: Routes = [
  /* será chamado o componente FormAluno quando a URL endereçar /aluno */
  { path: "aluno", component: FormAlunoComponent },
  /* será chamado o componente FormDisciplina quando a URL endereçar /disciplina */
  { path: "disciplina", component: FormDisciplinaComponent },
  /* será chamado o componente FormMatricula quando a URL endereçar /matricula */
  { path: "matricula", component: FormMatriculaComponent },
  /* será redirecionado para a URL /aluno quando a URL terminar na raiz / */
  { path: "", redirectTo: "/aluno", pathMatch: "full" },
  /* será redirecionado para a URL /matricula quando a URL for desconhecida, por exemplo, /teste */
  { path: "**", redirectTo: "/matricula" }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    /* é necessário registrar as rotas usando RouterModule.forRoot()
Ao usar forRoot o serviço Router estará disponível em toda a aplicação */
    RouterModule.forRoot(rotas)
  ],
  declarations: [
    AppComponent,
    FormAlunoComponent,
    FormDisciplinaComponent,
    FormMatriculaComponent
  ],
  bootstrap: [AppComponent],
  providers: [ServicoService]
})
export class AppModule {}
