import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="logo">
      <img src="/assets/images/pioneer-logo.jpg" alt="Pioneer Trading P.L.C. Logo">
    </div>
  `,
  styles: [`
    .logo {
      display: flex;
      align-items: center;
    }
    .logo img {
      height: 50px;
      width: auto;
    }
  `]
})
export class LogoComponent {}