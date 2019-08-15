import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScrollService 
{
  private scrollSubject = new Subject<any>();
  scrollObs = this.scrollSubject.asObservable(); 
  
  constructor() { }
  
  sendScrollMessage(message: string) 
  {
    this.scrollSubject.next({ text: message });
  }

  clearScrollMessage() 
  {
      this.scrollSubject.next();
  }
}
