import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mostrarMenu: boolean = false;

  constructor(private authLogin: AuthLoginService) { }

  ngOnInit(): void {
    this.authLogin.menuEmissor.subscribe((valor)=>{
      this.mostrarMenu = valor;
    });
  }

}
