import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  platosForm: FormGroup;
  platos: any;

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'options'];
  dataSource = new MatTableDataSource<any>;

  constructor(
    public fb: FormBuilder,
    public menuService: MenuService,
    private router: Router,
  ) {
    this.platosForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.menuService.getAllPlatos().subscribe(resp => {
      this.platos = resp;
      this.cargarPlatos();
    },
      error => { console.error(error) }
    );
  }
  cargarPlatos() {
    this.dataSource = new MatTableDataSource(this.platos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminar(platos: any) {
    this.menuService.deletePlato(platos.id).subscribe(resp => {
      if (resp === true) {
        this.platos.pop(platos);
      }
    })
  }
  editar(platos: any) {
    this.platosForm.setValue({
      id: platos.id,
      nombre: platos.nombre,
      valor: platos.valor,
    });
    this.router.navigate(['/dashboard/crearplato']);
  }
}