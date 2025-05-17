import { Component, Input } from '@angular/core';
import { Salvataggi } from '../salvataggi.model';

@Component({
  selector: 'app-lista-prenotazioni',
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() pren! : Salvataggi;
}
