import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../_services/users.service';
import { User } from '../../_models/user';
import { toast } from 'angular2-materialize';

@Component({
	selector: 'app-user-create',
	templateUrl: './user-create.component.html',
	styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
	@Output() onUser = new EventEmitter<any>();
	user: User;
	constructor( private _userService: UsersService) { 
		this.user = {
			name: '',
			last_name: '',
			email: '',
			phone: ''
		}
	}

	ngOnInit() {
	}

	addUser(): void{
		this._userService.addUser(this.user).then((data) => {
			console.log(data);
			this.onUser.emit({ message: 'Usuario Creado'});
		}).catch((err) => {
			toast(err, 7000, 'red');
		});
	}
}
