import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="filters">
      <button 
        *ngFor="let category of categories"
        (click)="onCategoryClick(category)"
        [class.active]="selectedCategory === category"
        class="filter-btn">
        {{ category }}
      </button>
    </div>
  `,
  styles: [`
    .filters {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .filter-btn.active {
      background: var(--secondary-color);
      color: white;
    }

    .filter-btn:hover:not(.active) {
      background: var(--light-gray);
    }
  `]
})
export class FilterComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  onCategoryClick(category: string) {
    this.categoryChange.emit(category);
  }
}