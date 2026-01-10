import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });

  }
  ngOnInit(): void {
    this.crearGraficaVentas();
    this.crearGraficaPlatos();
  }
  crearGraficaVentas() {
    new Chart('ventasChart', {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Ventas ($)',
          data: [120, 190, 300, 250, 420, 380, 500],
          fill: true,
          tension: 0.4
        }]
      }
    });
  }

  crearGraficaPlatos() {
    new Chart('platosChart', {
      type: 'doughnut',
      data: {
        labels: ['Hamburguesa', 'Pizza', 'Pollo', 'Jugos'],
        datasets: [{
          data: [35, 25, 20, 20]
        }]
      }
    });
  }
}
