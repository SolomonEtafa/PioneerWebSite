import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Pioneer Trading P.L.C. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary-color);
      color: white;
      padding: 20px 0;
      text-align: center;
    }
  `]
})
export class FooterComponent {}