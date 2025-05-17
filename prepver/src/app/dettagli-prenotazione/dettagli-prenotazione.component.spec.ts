import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPrenotazioneComponent } from './dettagli-prenotazione.component';

describe('DettagliPrenotazioneComponent', () => {
  let component: DettagliPrenotazioneComponent;
  let fixture: ComponentFixture<DettagliPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliPrenotazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
