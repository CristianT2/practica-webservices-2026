import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, Footer],
  styleUrl: './app.css',
  template: `
    <header>
      <app-header/>
    </header>
    <main>
      <router-outlet/>
    </main>
    <footer>
      <app-footer/>
    </footer>
  `   

})
export class App {
  protected readonly title = signal('tp-webservice-3305');
}
