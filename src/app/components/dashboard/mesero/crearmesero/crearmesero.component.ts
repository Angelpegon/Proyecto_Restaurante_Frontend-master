import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeseroService } from 'src/app/services/mesero/mesero.service';

@Component({
  selector: 'app-crearmesero',
  templateUrl: './crearmesero.component.html',
  styleUrls: ['./crearmesero.component.css']
})
export class CrearmeseroComponent implements OnInit {
  personaForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public meserosService: MeseroService,
  ) {
  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      sexo: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }
  guardar(): void {
    this.meserosService.saveMesero(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset();
      this.personaForm.setErrors(null);
    },
      error => { console.error(error) }
    )
  }
}
