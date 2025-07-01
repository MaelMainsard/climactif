import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

export interface SearchItem {
  id: number | string;
  title: string;
  description: string;
  category?: string;
  [key: string]: any; // Pour permettre des propriétés supplémentaires
}

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @Input() data: SearchItem[] = [];
  @Input() placeholder: string = 'fatigue, espoir, joie...';
  @Input() debounceTime: number = 300;
  @Input() minSearchLength: number = 3;
  @Input() maxResults: number = 10;
  @Input() searchFields: string[] = ['title', 'description', 'category'];
  
  @Output() resultSelected = new EventEmitter<SearchItem>();
  @Output() searchQueryChanged = new EventEmitter<string>();
  @Output() resultsChanged = new EventEmitter<SearchItem[]>();

  searchQuery: string = '';
  filteredResults: SearchItem[] = [];
  showResults: boolean = false;
  selectedIndex: number = -1;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  // Données d'exemple - à remplacer par vos vraies données
  private defaultData: SearchItem[] = [
    {
      id: 1,
      title: 'Fatigue',
      description: 'État de lassitude physique ou mentale',
      category: 'santé'
    },
    {
      id: 2,
      title: 'Espoir',
      description: 'Sentiment de confiance en l\'avenir',
      category: 'émotion'
    },
    {
      id: 3,
      title: 'Joie',
      description: 'Sentiment de bonheur et de satisfaction',
      category: 'émotion'
    },
    {
      id: 4,
      title: 'Motivation',
      description: 'Force qui pousse à agir',
      category: 'psychologie'
    },
    {
      id: 5,
      title: 'Stress',
      description: 'Réaction de l\'organisme face aux contraintes',
      category: 'santé'
    },
    {
      id: 6,
      title: 'Anxiété',
      description: 'Trouble émotionnel causé par l\'incertitude',
      category: 'santé'
    },
    {
      id: 7,
      title: 'Confiance',
      description: 'Sentiment de sécurité et d\'assurance',
      category: 'émotion'
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Utiliser les données par défaut si aucune donnée n'est fournie
    if (this.data.length === 0) {
      this.data = this.defaultData;
    }

    // Configuration du debounce pour la recherche
    this.searchSubject.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      this.performSearch(query);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    this.searchQuery = query;
    this.selectedIndex = -1;
    
    this.searchQueryChanged.emit(query);
    this.searchSubject.next(query);
  }

  onFocus(): void {
    if (this.searchQuery.trim().length >= this.minSearchLength) {
      this.showResults = true;
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateUp();
        break;
      case 'Enter':
        event.preventDefault();
        this.selectCurrentResult();
        break;
      case 'Escape':
        this.hideResults();
        break;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.hideResults();
    }
  }

  private performSearch(query: string): void {
    if (query.trim().length < this.minSearchLength) {
      this.filteredResults = [];
      this.showResults = false;
      this.resultsChanged.emit(this.filteredResults);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    
    this.filteredResults = this.data
      .filter(item => this.matchesSearchTerm(item, searchTerm))
      .slice(0, this.maxResults);

    this.showResults = true;
    this.selectedIndex = -1;
    this.resultsChanged.emit(this.filteredResults);
  }

  private matchesSearchTerm(item: SearchItem, searchTerm: string): boolean {
    return this.searchFields.some(field => {
      const value = item[field];
      return value && value.toString().toLowerCase().includes(searchTerm);
    });
  }

  private navigateDown(): void {
    if (this.filteredResults.length === 0) return;
    
    this.selectedIndex = this.selectedIndex < this.filteredResults.length - 1 
      ? this.selectedIndex + 1 
      : 0;
  }

  private navigateUp(): void {
    if (this.filteredResults.length === 0) return;
    
    this.selectedIndex = this.selectedIndex > 0 
      ? this.selectedIndex - 1 
      : this.filteredResults.length - 1;
  }

  private selectCurrentResult(): void {
    if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredResults.length) {
      this.selectResult(this.filteredResults[this.selectedIndex]);
    }
  }

  selectResult(result: SearchItem): void {
    this.searchQuery = result.title;
    this.hideResults();
    this.resultSelected.emit(result);
  }

  private hideResults(): void {
    this.showResults = false;
    this.selectedIndex = -1;
  }

  highlightText(text: string, searchTerm: string): string {
    if (!searchTerm || !text) {
      return text;
    }

    const regex = new RegExp(`(${this.escapeRegExp(searchTerm)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Méthodes publiques pour contrôler le composant depuis l'extérieur
  public clearSearch(): void {
    this.searchQuery = '';
    this.filteredResults = [];
    this.hideResults();
  }

  public focusInput(): void {
    const input = this.elementRef.nativeElement.querySelector('.search-input');
    if (input) {
      input.focus();
    }
  }

  public setData(newData: SearchItem[]): void {
    this.data = newData;
    if (this.searchQuery.trim().length >= this.minSearchLength) {
      this.performSearch(this.searchQuery);
    }
  }
}