import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    FooterComponent,
    HeaderComponent,
    ProdutoDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
