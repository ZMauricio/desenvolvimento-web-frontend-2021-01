import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosPainelComponent } from './produtos-painel.component';

describe('ProdutosPainelComponent', () => {
  let component: ProdutosPainelComponent;
  let fixture: ComponentFixture<ProdutosPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
