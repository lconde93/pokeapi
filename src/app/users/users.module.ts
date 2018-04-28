import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Route, RouterModule } from '@angular/router';
import { UsersService } from '../_services/users.service';
import { UserCreateComponent } from './user-create/user-create.component';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [{
	path: 'users', component: UsersComponent
}];

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forRoot(routes)		
	],
	declarations: [UsersComponent, UserCreateComponent],
	providers: [
		UsersService		
	]
})
export class UsersModule { }
