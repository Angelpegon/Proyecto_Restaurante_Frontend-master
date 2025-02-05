import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediosdepagoService } from 'src/app/services/mediosdepago/mediosdepago.service';

@Component({
  selector: 'app-creartipo',
  templateUrl: './creartipo.component.html',
  styleUrls: ['./creartipo.component.css']
})
export class CreartipoComponent implements OnInit {
  tipoForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public mediosdepagoService : MediosdepagoService,
    private _snackBar: MatSnackBar,
  ) { 
    this.tipoForm = this.fb.group({
      id: [''],
      nombre:['',Validators.required],
    })
  }

  ngOnInit(): void {

  }
  guardar(): void {
    this.mediosdepagoService.saveMediosdePago(this.tipoForm.value).subscribe(resp => {
      this.tipoForm.reset();
      this.tipoForm.setErrors(null);
      this._snackBar.open('Medio de pago agregado con exito', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      setTimeout(() => {
        //Redireccionamos al dashboard
        window.location.assign('http://localhost:4200/dashboard/tipo');
      }, 500);
    },
      error => { console.error(error) }
    )
  }

}
