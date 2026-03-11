import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter-container">
      <h1>{{ title }}</h1>
      <div class="counter-display">
        <span class="counter-value">{{ count() }}</span>
      </div>
      <div class="button-group">
        <button (click)="decrement()" class="btn btn-decrement">
          <span>−</span>
        </button>
        <button (click)="reset()" class="btn btn-reset">
          Reset
        </button>
        <button (click)="increment()" class="btn btn-increment">
          <span>+</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .counter-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .counter-display {
      background: white;
      border-radius: 20px;
      padding: 3rem 4rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      min-width: 250px;
      text-align: center;
    }

    .counter-value {
      font-size: 4rem;
      font-weight: bold;
      color: #667eea;
      display: block;
    }

    .button-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 1.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      color: white;
      min-width: 100px;
    }

    .btn-increment {
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    }

    .btn-increment:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(17, 153, 142, 0.3);
    }

    .btn-decrement {
      background: linear-gradient(135deg, #eb3349 0%, #f45c43 100%);
    }

    .btn-decrement:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(235, 51, 73, 0.3);
    }

    .btn-reset {
      background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      color: #333;
    }

    .btn-reset:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(250, 112, 154, 0.3);
    }

    .btn:active {
      transform: translateY(0);
    }
  `]
})
export class CounterComponent {
  title = 'Angular Counter App';
  count = signal(0);

  increment(): void {
    this.count.update(value => value + 1);
  }

  decrement(): void {
    this.count.update(value => value > 0 ? value - 1 : value);
  }

  reset(): void {
    this.count.set(0);
  }
}
