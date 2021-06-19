import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProdutosModule } from './views/produtos/produtos.module';
import { ClientesModule } from './views/clientes/clientes.module';

import { registerLocaleData } from '@angular/common';
import localetPt from '@angular/common/locales/pt';

import { ProdutosGuardService } from 'src/app/guards/produtos-guard.service';

import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './views/signin/signin.component';

import { ProdutosService } from './services/produtos.service';




// import { ProdutosComponent } from './views/produtos/produtos.component';
// import { ProdutoDetalhesComponent } from './views/produtos/produto-detalhes/produto-detalhes.component';
// import { ProdutoNovoComponent } from './views/produtos/produto-novo/produto-novo.component';
// import { ProdutosControlComponent } from './views/painel/produtos-control/produtos-control.component';
// import { ProdutoInfoComponent } from './views/produtos/produto-info/produto-info.component';

registerLocaleData(localetPt);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    FooterComponent,
    HeaderComponent,
    // ProdutosComponent,
    // ProdutoDetalhesComponent,
    // ProdutoNovoComponent,
    // ProdutosControlComponent,
    // ProdutoInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProdutosModule,
    // ClientesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    ProdutosService,
    // ProdutosGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
