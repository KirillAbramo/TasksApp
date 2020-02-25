import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenzorComponent } from './cenzor/cenzor.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'cenzor', component: CenzorComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'task-list', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
