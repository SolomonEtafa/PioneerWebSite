import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { GalleryItemComponent } from './gallery-item.component';
import { PortfolioItem } from '../../models/portfolio.model';
import { FilterComponent } from './filter.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, GalleryItemComponent, FilterComponent],
  template: `
    <section id="portfolio" class="section portfolio">
      <div class="container">
        <h2 class="text-center">Our Portfolio</h2>
        <app-filter
          [categories]="categories"
          [selectedCategory]="selectedCategory"
          (categoryChange)="filterByCategory($event)">
        </app-filter>
        <div class="gallery-grid">
          <app-gallery-item 
            *ngFor="let item of filteredItems" 
            [item]="item">
          </app-gallery-item>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio {
      background-color: var(--light-gray);
    }

    h2 {
      margin-bottom: 40px;
      font-size: 36px;
      color: var(--primary-color);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }
  `]
})
export class PortfolioComponent implements OnInit {
  items: PortfolioItem[] = [];
  filteredItems: PortfolioItem[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.items = this.portfolioService.getPortfolioItems();
    this.filteredItems = this.items;
    this.categories = ['All', ...this.portfolioService.getCategories()];
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredItems = this.portfolioService.getItemsByCategory(category);
  }
}