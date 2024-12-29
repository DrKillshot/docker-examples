import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloService} from './services/hello.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly helloService = inject(HelloService);

  title = 'angular-app';

  protected readonly greeting = this.helloService.greeting
}
