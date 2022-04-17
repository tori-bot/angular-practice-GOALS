
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../classes/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote:Quote

  constructor(private http: HttpClient) {
    this.quote=new Quote('','')
  }

  quoteRequest() {
    interface ApiResponse{
      author: string,
      quote:string
    }

    
     return new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        this.quote.quote = response.quote;
        this.quote.author = response.author;

        resolve(response)

      }, error => {
        this.quote.quote = 'Never, never give up!';
        this.quote.author = 'Winston Churchill';

        reject(error)
      })
    })
    
  }
}
