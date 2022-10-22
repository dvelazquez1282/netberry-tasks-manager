import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '',   redirectTo: '/panel/tasks', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'panel', 
    canActivate: [AuthGuard],
    children: [
      { path: '',   redirectTo: '/panel/tasks', pathMatch: 'full'},
      { path: 'tasks', component: TasksComponent,  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
