import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { API_URL } from '../app.constants';

@Injectable()
export class PokemonService {

  urlService: string = API_URL;
  constructor(private _http: Http, private _httpClient: HttpClient) { }

  get(): Observable<any> {
    return this._httpClient.get(this.urlService + 'pokemon'/*, {headers: new Headers({'Content-Type': 'application/json'})}*/);
/*       .map((res: any) => {
        res.json();
      }).catch((error) => {
        return Observable.throw(JSON.parse(error._body) || error);
      });
 */
  }
}
