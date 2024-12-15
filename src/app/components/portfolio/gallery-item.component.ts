import { Component, Input } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  template: `
    <div class="gallery-item" [class.expanded]="expanded" (click)="toggleExpand()">
      <img [src]="item.imageUrl" [alt]="item.title">
      <div class="overlay">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <span class="category">{{ item.category }}</span>
      </div>
    </div>
  `,
  styles: [`
    .gallery-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .gallery-item img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 20px;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .overlay {
      transform: translateY(0);
    }

    .category {
      display: inline-block;
      background: var(--secondary-color);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      margin-top: 8px;
    }

    h3 {
      margin: 0 0 8px;
      font-size: 18px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  `]
})
export class GalleryItemComponent {
  @Input() item!: PortfolioItem;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}