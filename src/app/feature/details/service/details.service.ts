import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private readonly httpClient = inject (HttpClient)
  getmealdetails(id:string|null):Observable<any>{
return this.httpClient.get(environment.baseurl+`/recipes/${id}`)
  }
}
