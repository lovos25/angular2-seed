import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			name: ['', Validators.required],
			vorname: ['', Validators.required],
			email: ['', [Validators.required, CustomValidators.validateEmail]],
			content: ['', [Validators.required, Validators.minLength(10)]]
		});
	}

	submitForm(): void {
		console.log(this.contactForm);
		if(this.contactForm.valid)
			this.submitted = true;
	}
}
