import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { SPRITES_URL } from '../app.constants';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.css'],
	providers: [PokemonService]
})
export class PokemonDetailComponent implements OnInit {
	pokemon: any = {};
	loading: boolean = true;
	urlImg: string = SPRITES_URL;
	currentImage: number = 0;
	images: string[] = [];
	selectedMove: any = {};
	constructor(
		private _pokemonService: PokemonService,
		private _activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this._activatedRoute.params
			.subscribe( (params) => {
				console.log(params);
				if(params.id) {
					this.getDetail(params.id);
					this.getCharacteristics(params.id);
				}
			});	

	}

	getDetail(id: number): void {
		this.loading = true;
		this._pokemonService.getDetail(id)
			.subscribe((data) => {
				console.log(data);
				Object.assign(this.pokemon, data);	
				this.setImages(data.sprites);
			}, (error) => {
				console.log(error);
			}, () =>{
				this.loading = false;
			}); 
	}

	changeImg( flag:boolean ):void {
		let aux = flag ? 1 : -1;
		this.currentImage += aux;
		if(this.currentImage > this.images.length - 1) {
			this.currentImage = 0;
		}
		else if(this.currentImage < 0) {
			this.currentImage = this.images.length - 1; 
		}
	}

	setImages(images: any):void {
		this.images = [];
		let counter = 0;
		for(let img in images) {
			if(images[img]) {
				if(img === 'front_default') {
					this.currentImage = counter;
				}
				this.images.push(images[img]);
				counter ++;
			}			
		}
	}

	getCharacteristics(id: number):void {
		this._pokemonService.getCharacteristics(id)
			.subscribe((data) => {				
				this.pokemon.characteristic = {};
				Object.assign(this.pokemon.characteristic, data);					
			}, (error) => {
				console.log(error);
			}, () =>{
				/* this.loading = false; */
			}); 
	}

}
