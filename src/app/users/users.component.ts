import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UsersService } from '../_services/users.service';
import { toast } from 'angular2-materialize';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	users: User[] = [];	
	constructor(private _userService: UsersService) { }

	ngOnInit() {
		this.getUsers();

	}

	getUsers():void {
		
		this._userService.getUsers()
			.subscribe( (data) => {		
				this.users = [];		
				for(let item in data) {					
					let userAux = data[item];
					userAux.id = item;
					/* console.log(userAux); */
					this.users.push(userAux);					
				}							
			});		
	}

	notify(obj: any): void {
		toast(obj.message, 5000, 'green');
	}

	deleteUser(user: User) {
		this._userService.deleteUser(user.id).then((solve) => {
			toast("Usuario eliminado", 5000, 'red');
		}).catch((err) => {
			toast(err, 5000, 'red');
		});
	}

}
