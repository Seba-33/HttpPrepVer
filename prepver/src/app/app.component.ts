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

  constructor(private http: HttpClient){
  this.obs =  this.http.get<Salvataggi[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni'); 
  //dico all'observable cosa fare quando ricevo i dati
  this.obs.subscribe(this.getdata );
  
  }


  getdata = (data : Salvataggi[]) => {
    console.log(data);
    this.vettSalva = data;
  }

  
  obsPost! : Observable<any>;
  salva( data : string, ora : string, nome : string, cognome : string, indirizzo : string, telefono : string, email : string ){
    let nuovaPren = new Salvataggi(data, ora, nome, cognome, indirizzo, telefono, email);
    this.vettSalva.push(nuovaPren);

    this.obsPost = this.http.post('https://jsonplaceholder.typicode.com/posts', nuovaPren)
    this.obsPost.subscribe(this.rispostaPost);
    
  }

  rispostaPost = (data : any) => {
    console.log(data)
  }

  
}

