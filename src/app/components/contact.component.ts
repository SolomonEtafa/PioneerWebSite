import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section contact">
      <div class="container">
        <h2 class="text-center">Contact Us</h2>
        <div class="contact-info">
          <div class="info-item">
            <h3>Address</h3>
            <p>Gerji Mebrat Hail, Around Kadisco Hospital</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
          <div class="info-item">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 8:30 AM - 8:30 PM</p>
            <p>Saturday: 8:30 AM - 5:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div class="info-item">
            <h3>Contact</h3>
            <p>Phone: 091 031 0318</p>
            <p>Walk-ins Welcome</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: white;
    }
    h2 {
      margin-bottom: 50px;
      font-size: 36px;
      color: var(--primary-color);
    }
    .contact-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      text-align: center;
    }
    .info-item {
      padding: 20px;
    }
    .info-item h3 {
      color: var(--secondary-color);
      margin-bottom: 15px;
    }
  `]
})
export class ContactComponent {}