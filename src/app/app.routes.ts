import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TodoListComponent } from './todo/todo-list.component';
import { WeatherListComponent } from './weather/weather-list.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'weather', component: WeatherListComponent }
];

