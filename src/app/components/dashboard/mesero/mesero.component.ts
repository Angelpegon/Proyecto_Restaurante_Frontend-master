import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MeseroService } from 'src/app/services/mesero/mesero.service';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  meseros: any;

  displayedColumns: string[] = ['id', 'nombres','apellidos','estado', 'options'];
  dataSource = new MatTableDataSource<any>;

  constructor(
    public fb: FormBuilder,
    public meserosService: MeseroService,
  ) {
  }
  ngOnInit(): void {
    this.meserosService.getAllMeseros().subscribe(resp => {
      this.meseros = resp;
      this.cargarMeseros();
    },
      error => { console.error(error) }
    );
  }
  cargarMeseros() {
    this.dataSource = new MatTableDataSource(this.meseros);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminar(meseros: any) {
    this.meserosService.deleteMesero(meseros.id).subscribe(resp => {
      if (resp === true) {
        this.meseros.pop(meseros);
      }
    })
  }

}


