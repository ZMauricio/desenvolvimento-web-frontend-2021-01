import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProdutoDetalhesComponent } from './views/produto-detalhes/produto-detalhes.component';
import { ProdutoNovoComponent } from './views/produto-novo/produto-novo.component';
import { ProdutosService } from './services/produtos.service';
import { ProdutosControlComponent } from './views/painel/produtos-control/produtos-control.component';
import { ProdutoInfoComponent } from './views/produto-info/produto-info.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    FooterComponent,
    HeaderComponent,
    ProdutoDetalhesComponent,
    ProdutoNovoComponent,
    ProdutosControlComponent,
    ProdutoInfoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
