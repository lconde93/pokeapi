import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  pokemonList: any[] = [];
  loading: boolean = false;
  constructor(private _pokeService: PokemonService) { }

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.loading = true;

    this._pokeService.get()
    .subscribe((data) => {
      console.log(data);
      this.pokemonList = data;
    }, (err) => {
      console.log(err);
    }, () => {
      this.loading = false;
    });
  }
}
