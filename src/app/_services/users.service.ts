import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import { dbFirebase } from '../app.constants';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsersService {

	constructor(
		private _angularFirestore: AngularFireDatabase
	) { 		
		/* _angularFirestore.firestore.settings({ timestampsInSnapshots: true }); */
	}

	getUsers(): Observable<any> {		
		return this._angularFirestore.object(dbFirebase.users).snapshotChanges().map( action => {			
			const $key = action.payload.key;			
            const data = {...action.payload.val()};
            return data;
		});
	}

	addUser(user: User): Promise<any> {
		const newUser = this._angularFirestore.list(dbFirebase.users).push(user);
		return Promise.resolve(newUser);
	}

	deleteUser(id: string): Promise<any> {
		return this._angularFirestore.list(dbFirebase.users).remove(id);
	}
}
