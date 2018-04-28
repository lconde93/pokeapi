import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { environment } from '../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,		
		HttpModule,
		MaterializeModule,
		AngularFireModule.initializeApp(environment.firebase, 'Test'), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule // imports firebase/storage only needed for storage features		
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,		
		HttpModule,
		MaterializeModule,		
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule // imports firebase/storage only needed for storage features		
	],
	declarations: [],
	providers: [HttpClient, AngularFireDatabase]
})
export class SharedModule { }
