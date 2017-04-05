import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather-item";
import { Subject } from "rxjs/Subject";

@Component({
	selector: 'weather-search',
	template: `
		<section class="weather-search">
			<form (ngSubmit)="onSubmit()" [formGroup]="weatherForm">
				<div class="form-group">
					<label for="ort">Ort eingeben</label>
					<input type="text" class="form-control" id="ort" formControlName="ort" placeholder="Nachname eingeben"
					(keyup)="onSearchLocation(ort.value)" required #ort>
				<button type="submit" class="btn btn-primary">Add City</button>
			</form>
			<div>
				<span class="info">City found:</span> {{data.name}}
			</div>
		</section>
	`
})

export class WeatherSearchComponent implements OnInit {
	weatherForm: FormGroup;
	private searchStream = new Subject<string>();
	data: any = {};

	constructor(
		private weatherService:WeatherService,
		private formBuilder: FormBuilder) {
	}

	onSubmit() {
		const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
		this.weatherService.addWeatherItem(weatherItem);

	}

	onSearchLocation(cityName:string) {
		this.searchStream
			.next(cityName);
	}

	ngOnInit() {
		this.weatherForm = this.formBuilder.group({
			ort: ['', Validators.required]
		});
		/*this.searchStream
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap((input:string) => this._weatherService.searchWeatherData(input))
			.subscribe(
			  data => this.data = data
			);*/
	}
}