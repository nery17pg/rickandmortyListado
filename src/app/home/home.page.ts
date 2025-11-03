import { Component, OnInit } from '@angular/core';
import { RickmortyService } from '../services/rickmorty.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false //Ponerlo en false porque si se deja en TRUE genera error
})
export class HomePage implements OnInit {
  characters: Character[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private rickmortyService: RickmortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.errorMessage = '';

    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar personajes:', error);
        this.errorMessage = 'No se pudieron cargar los personajes. Verifica tu conexión.';
        this.isLoading = false;
      }
    });
  }

  getStatusColor(status: string): string {
    switch(status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      default:
        return 'medium';
    }
  }

  retry() {
    this.loadCharacters();
  }
}
