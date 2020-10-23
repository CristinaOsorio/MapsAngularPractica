import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar/mapa-editar.component';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    if (localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    
  }

  

  ngOnInit(): void {
  }

  agregarMarcador(evento): void {
    const coords: { lat: number, lng: number } = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar', { duration:3000 });

  }

  guardarStorage(): void {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  eliminarMarcador(i: number): void{
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration:3000 });

  }

  editarMarcador( marcador: Marcador ): void {

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.tituto, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });


    this.snackBar.open('Marcador editado', 'Cerrar', { duration:3000 });
    this.guardarStorage();
  }

}
