import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-mapa-editar',
	template: `
		<form [formGroup]="form" >
			<mat-form-field>
				<input matInput placeholder="Titulo" required formGroupName='tituto'>
			</mat-form-field>
			<br>
			<br>
			<mat-form-field appearance="fill">
				<mat-label>Textarea</mat-label>
				<textarea rows="3" matInput formGroupName="desc"></textarea>
			</mat-form-field>
			<button mat-raised-button color="primary" style="margin-right: 3px;" (click)="guardarCambios()">Editar</button>
			<button mat-raised-button color="warn" (click)="onNoClick()" type="button">Cancelar</button>
		</form>
	`,
	styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

	form: FormGroup;

	constructor(
		public fb: FormBuilder,
		public dialogRef: MatDialogRef<MapaEditarComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) {
			console.log(data);

			this.form = fb.group({
				tituto: data.tituto,
				desc: data.desc
			});
	

		}

	ngOnInit(): void {}

	guardarCambios(): void {
		
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

}
