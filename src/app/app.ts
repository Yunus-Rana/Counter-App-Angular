import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  counter: WritableSignal<number> = signal<number>(0);

  increment(): void {
    this.counter.update((val) => val + 1);
  }

  decrement(): void {
    if (this.counter() > 0) {
      this.counter.update((val) => val - 1);
    }
  }

  reset(): void {
    this.counter.set(0);
  }
}

