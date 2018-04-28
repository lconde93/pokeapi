import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'pokemon', component: PokemonComponent },
	{ path: 'pokemon/:id', component: PokemonDetailComponent },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PokemonComponent,
		NavbarComponent,
		PokemonDetailComponent,
	],
	imports: [
		BrowserModule,
		MaterializeModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
