import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio.model';
import { PORTFOLIO_ITEMS } from '../data/portfolio-items.data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioItems: PortfolioItem[] = PORTFOLIO_ITEMS;

  getPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  getCategories(): string[] {
    return [...new Set(this.portfolioItems.map(item => item.category))];
  }

  getItemsByCategory(category: string): PortfolioItem[] {
    return category === 'All' 
      ? this.portfolioItems 
      : this.portfolioItems.filter(item => item.category === category);
  }
}