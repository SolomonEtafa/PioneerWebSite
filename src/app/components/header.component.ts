import { Component } from '@angular/core';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <app-logo></app-logo>
          <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }
    .nav-links {
      display: flex;
      gap: 30px;
    }
    .nav-links a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .nav-links a:hover {
      color: var(--secondary-color);
    }
  `]
})
export class HeaderComponent {}