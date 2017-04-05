import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

import { TodoListComponent } from './todo/todo-list.component';
import { TodoDataService } from './todo/todo-data.service';

import { WeatherListComponent } from "./weather/weather-list.component";
import { WeatherItemComponent } from "./weather/weather-item.component";
import { WeatherSearchComponent } from "./weather/weather-search.component";
import { WeatherService } from "./weather/weather.service";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		TodoListComponent,
		WeatherListComponent, WeatherItemComponent, WeatherSearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: true })
	],
	providers: [
		TodoDataService, WeatherService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}
