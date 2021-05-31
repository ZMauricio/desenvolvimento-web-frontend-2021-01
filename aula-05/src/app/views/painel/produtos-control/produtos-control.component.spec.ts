import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosControlComponent } from './produtos-control.component';

describe('ProdutosControlComponent', () => {
  let component: ProdutosControlComponent;
  let fixture: ComponentFixture<ProdutosControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
