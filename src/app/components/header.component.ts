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
          <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="nav-links" [class.active]="isMenuOpen">
            <a href="#home" (click)="closeMenu()">Home</a>
            <a href="#services" (click)="closeMenu()">Services</a>
            <a href="#portfolio" (click)="closeMenu()">Portfolio</a>
            <a href="#contact" (click)="closeMenu()">Contact</a>
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

    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }

    .menu-toggle span {
      width: 100%;
      height: 3px;
      background-color: var(--text-color);
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 70%;
        max-width: 300px;
        background-color: white;
        flex-direction: column;
        padding: 80px 20px 20px;
        transition: right 0.3s ease;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
      }

      .nav-links.active {
        right: 0;
      }

      .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .menu-toggle.active span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}