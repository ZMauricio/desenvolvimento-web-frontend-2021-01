import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mostrar: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.mostrarMenuEmitter.subscribe((resposta)=>{
      this.mostrar = resposta;
    });

  }

}
