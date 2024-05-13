import { Component, OnInit, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
	selector: 'app-pet-container',
	standalone: true,
	imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
	templateUrl: './pet-container.component.html'
})
export class PetContainerComponent implements OnInit {
	private parentContainer = inject(ControlContainer, { optional: true });
	formGroup!: FormGroup;

	private readonly _dynamicDialogConfig: DynamicDialogConfig<{ pet: FormGroup }> = inject(DynamicDialogConfig);

	ngOnInit(): void {
		this.formGroup = this.parentFormGroup ? this.parentFormGroup : this._dynamicDialogConfig.data!.pet;
	}

	get parentFormGroup() {
		return this.parentContainer?.control?.get('pet') as FormGroup;
	}
}
