import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Salvataggi } from './salvataggi.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { DettagliPrenotazioneComponent } from './dettagli-prenotazione/dettagli-prenotazione.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ListaPrenotazioniComponent,DettagliPrenotazioneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'prepver';
  vettSalva : Salvataggi[] = []
  obs : Observable<Salvataggi[]> ;
  obsPren! : Observable<any>;

  constructor(private http: HttpClient){
  this.obs =  this.http.get<Salvataggi[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni'); 
  //dico all'observable cosa fare quando ricevo i dati
  this.obs.subscribe(this.getdati);
  
  }


  getdati = (dati : Salvataggi[]) => {
    console.log(dati);
    this.vettSalva = dati;
  }

  
  
  salva( data : string, ora : string, nome : string, cognome : string, indirizzo : string, telefono : string, email : string ){
    let nuovaPren = new Salvataggi(data, ora, nome, cognome, indirizzo, telefono, email);
    this.vettSalva.push(nuovaPren);
    console.log(this.vettSalva);

    this.obsPren = this.http.post('https://jsonplaceholder.typicode.com/posts', nuovaPren);
    this.obsPren.subscribe(this.rispostaPost);
    
  }

  rispostaPost = (dati : any) => {
    console.log(dati)
  }

  
}

