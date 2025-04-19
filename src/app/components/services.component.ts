import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="section services">
      <div class="container">
        <h2 class="text-center">Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Brand Creation</h3>
            <p>Develop unique and memorable brand identities that resonate with your target audience.</p>
          </div>
          <div class="service-card">
            <h3>Brand Strategy</h3>
            <p>Create comprehensive branding strategies to position your business for success.</p>
          </div>
          <div class="service-card">
            <h3>Rebranding</h3>
            <p>Transform existing brands to better align with current market demands and business goals.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background-color: var(--light-gray);
    }
    h2 {
      margin-bottom: 50px;
      font-size: 36px;
      color: var(--primary-color);
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    .service-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .service-card:hover {
      transform: translateY(-5px);
    }
    h3 {
      color: var(--secondary-color);
      margin-bottom: 15px;
    }
  `]
})
export class ServicesComponent {}