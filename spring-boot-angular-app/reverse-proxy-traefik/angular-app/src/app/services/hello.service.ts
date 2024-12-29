import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private readonly http = inject(HttpClient);

  greeting = toSignal(
    this.http.get('http://localhost:666/api/v1/hello', { responseType: 'text' }),
    { initialValue: "Hello from Angular!" }
  )
}
