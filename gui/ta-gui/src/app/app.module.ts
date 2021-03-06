import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MetasComponent } from './metas.component';
import { ConceitosComponent} from './conceitos.component';
import { AlunosComponent } from './alunos.component';
import { AlunoService } from './aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    MetasComponent,
    AlunosComponent,
    ConceitosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'metas',
        component: MetasComponent
      },
      {
        path: 'alunos',
        component: AlunosComponent
      },
      {
        path: 'conceitos',
        component: ConceitosComponent
      }
    ])
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
