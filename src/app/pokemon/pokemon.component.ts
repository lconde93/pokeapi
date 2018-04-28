import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { SPRITES_URL } from '../app.constants';


@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.css'],
	providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

	pokemonList: any[] = [];
	loading: boolean = false;
	urlImg: string = SPRITES_URL;
	request: any = {offset: 0, limit: 20};
	constructor(private _pokeService: PokemonService) { }

	ngOnInit() {
		this.getList();
	}

	getList(): void {
		this.loading = true;

		this._pokeService.get(this.request)
			.subscribe((data) => {
				console.log(data);
				if( data.results ) {
					this.pokemonList.push(...data.results);
					this.request.offset += 20; 
				}
			}, (err) => {
				console.log(err);
			}, () => {
				this.loading = false;
			});
	}
}
