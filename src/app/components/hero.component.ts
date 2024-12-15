import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Transform Your Brand Identity</h1>
          <p>Specialized in creating, launching, and rebranding for businesses that want to make an impact.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)),
                  url('../../assets/images/DALL·E 2024-12-15 16.07.16.webp');
      background-size: cover;
      background-position: center;
      height: 100vh;
      display: flex;
      align-items: center;
      color: white;
      margin-top: 80px;
    }
    .hero-content {
      max-width: 600px;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
    }
  `]
})
export class HeroComponent {}