import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('Lab2');

  protected movies = signal<string[]>([
    'Fast and Furious 1',
    'Fast and Furious 2',
    'Fast and Furious 3',
    'Fast and Furious 4',
    'Fast and Furious 5',
  ]);

  protected favourites = signal<string[]>([]);

  protected alertMessage()
  {
    alert('This is an alert message from the App component!');
  }
  protected addToFavourites(movie: string) {
    alert(`Added ${movie} to favourites`);
    this.favourites.update((current) => [...current, movie]);
  }

  protected deleteFavourite(index: number) {
    alert(`Removed favourite at index ${index}`);
    this.favourites.update((current) => current.filter((_, i) => i !== index));
  }
}
