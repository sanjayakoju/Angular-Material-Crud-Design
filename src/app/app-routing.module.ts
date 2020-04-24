import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
// 	{
// 		path : '',
// 		redirectTo: '/login',
// 		pathMatch: 'full'
// 	},
//   {
// 		path: 'login',
// 		component: LoginComponent
// 	},
// 	{
// 		path: 'addNewBook',
// 		component: AddNewBookComponent
// 	},
// 	{
// 		path: 'bookList',
// 		component: BookListComponent
// 	},
	
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
