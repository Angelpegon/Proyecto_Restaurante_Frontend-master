import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-crearclientes',
  templateUrl: './crearclientes.component.html',
  styleUrls: ['./crearclientes.component.css']
})
export class CrearclientesComponent implements OnInit {
  clientesForm: FormGroup;
  clientes: any;
  constructor(
    public fb: FormBuilder,
    public clientesService: ClientesService,
  ) {
    this.clientesForm = this.fb.group({
      nombre: [],
      direccion: [],
      telefono: [],
    })
  }
  ngOnInit(): void {

  }
  crearCliente() {
    this.clientesService.saveClientes(this.clientesForm.value).subscribe(resp => {
      this.clientesForm.reset();
      this.clientesForm.setErrors(null);
    },
      error => { console.error(error) }
    )
  }
}
