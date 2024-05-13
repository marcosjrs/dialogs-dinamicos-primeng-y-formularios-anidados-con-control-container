import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { PetContainerComponent } from '../shared/pet-container/pet-container.component';

@Component({
	selector: 'app-person-dynamic-dialog',
	standalone: true,
	imports: [ButtonModule, DialogModule, PetContainerComponent, InputTextModule, PaginatorModule, ReactiveFormsModule],
	templateUrl: './person-dynamic-dialog.component.html',
	providers: [DialogService]
})
export class PersonDynamicDialogComponent {
	
	ref?: DynamicDialogRef;
	dialogService = inject(DialogService);
	private _formBuilder = inject(FormBuilder);

	formGroup = this._formBuilder.group({
		nombre: ['Pedro'],
		edad: [24],
		herramienta: ['Portátil'],
		mascota: this._formBuilder.group({
			nombre: ['Toby'],
			color: ['Gris']
		})
	});

	showDialog() {
		this.ref = this.dialogService.open(PetContainerComponent, {
			header: 'Datos de la mascota',
			data: { pet: this.formGroup.controls.mascota }
		});
	}
}
