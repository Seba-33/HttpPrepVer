import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenotazioniComponent } from './lista-prenotazioni.component';

describe('ListaPrenotazioniComponent', () => {
  let component: ListaPrenotazioniComponent;
  let fixture: ComponentFixture<ListaPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPrenotazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
