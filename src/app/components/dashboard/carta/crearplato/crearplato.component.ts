import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-crearplato',
  templateUrl: './crearplato.component.html',
  styleUrls: ['./crearplato.component.css']
})
export class CrearplatoComponent implements OnInit {
  personaForm!: FormGroup;
  platos: any;
  constructor(
    public fb: FormBuilder,
    public menuService: MenuService,
  ) { 

  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }
  
  guardar(): void {
    console.log(this.personaForm);
    this.menuService.savePlato(this.personaForm.value).subscribe(resp => {
      this.personaForm.reset();
      this.personaForm.setErrors(null);
    },
      error => { console.error(error) }
    )
  }

}
