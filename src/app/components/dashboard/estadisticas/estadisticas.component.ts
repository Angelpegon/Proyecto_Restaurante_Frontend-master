import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import Chart from 'chart.js/auto';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  totalPedidosHoy: any;
  totalPedidosDomiciliosHoy: any;
  totalPedidos: any;
  totalPedidosMesaHoy: any;

  isMobile = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public pedidoService: PedidoService) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });

  }
  ngOnInit(): void {
    this.cargarTotalPedidosHoy();
    this.cargarTotalPedidosDomiciliosHoy();
    this.cargarTotalPedidosMesaHoy();
    this.cargarTotalPedidos();
    this.crearGraficaVentas();
    this.crearGraficaPlatos();
  }

  cargarTotalPedidos(): void {
    this.pedidoService.totalPedidos().subscribe(resp => {
      this.totalPedidos = resp;
    },
      error => { console.error(error) }
    );
  }
  cargarTotalPedidosDomiciliosHoy(): void {
    this.pedidoService.totalPedidosDomiciliosHoy().subscribe(resp => {
      this.totalPedidosDomiciliosHoy = resp;
    },
      error => { console.error(error) }
    );
  }
  cargarTotalPedidosMesaHoy(): void {
    this.pedidoService.totalPedidosMesaHoy().subscribe(resp => {
      this.totalPedidosMesaHoy = resp;
    },
      error => { console.error(error) }
    );
  }
  cargarTotalPedidosHoy(): void {
    this.pedidoService.totalPedidosHoy().subscribe(resp => {
      this.totalPedidosHoy = resp;
    },
      error => { console.error(error) }
    );
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
