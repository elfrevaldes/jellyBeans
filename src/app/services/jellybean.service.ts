import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JellyBeanService {
  private jellyBeanUpdated = new Subject<void>();

  jellyBeanUpdated$ = this.jellyBeanUpdated.asObservable();

  triggerJellyBeanUpdate(): void {
    this.jellyBeanUpdated.next();
  }
}
