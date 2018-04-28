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

	get(options: any = { offset: 0, limit: 20 }): Observable<any> {
		return this._httpClient.get(`${this.urlService}pokemon?offset=${options.offset}&limit=${options.limit}`);

	}

	getDetail(id: number): Observable<any> {
		return this._httpClient.get(`${this.urlService}pokemon/${ id }`);
	}

	getCharacteristics(id: number): Observable<any> {
		return this._httpClient.get(`${ this.urlService }characteristic/${ id }`);
	}
}
