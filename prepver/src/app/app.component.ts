import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Salvataggi } from './salvataggi.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prepver';
  vettSalva : Salvataggi[] = []
  
  salva(nome : string, ){
    
  }
}

