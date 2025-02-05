import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MediosdepagoService } from 'src/app/services/mediosdepago/mediosdepago.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  tipos: any;
  displayedColumns: string[] = ['id', 'nombre', 'options'];
  dataSource!: MatTableDataSource<any>;
  constructor(
    public mediosdepagoService: MediosdepagoService,
  ) { }

  ngOnInit(): void {
    this.mediosdepagoService.getAllMediosdePago().subscribe(resp => {
      this.tipos = resp;
      this.cargarTipos();
    },
      error => { console.error(error) }
    );

  }
  cargarTipos() {
    this.dataSource = new MatTableDataSource(this.tipos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  eliminar(tipos: any) {
    this.mediosdepagoService.deleteMediosdePago(tipos.id).subscribe(resp => {
      if (resp === true) {
        this.tipos.pop(tipos);
        this.cargarTipos();
      }
    })
  }
}
