import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import 'materialize-css';
import { RouterModule, Route } from '@angular/router';

import { UsersModule } from './users/users.module';
import { SharedModule } from '../app/shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AngularFirestore } from 'angularfire2/firestore';


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
		SharedModule,
		RouterModule.forRoot(routes),
		UsersModule		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
