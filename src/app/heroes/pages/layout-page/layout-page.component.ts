import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: '¿Qué es esto?', icon: 'sentiment_very_satisfied', url:'./about'},
    { label: 'Listado', icon: 'label', url:'./list'},
    { label: 'Añadir', icon: 'add', url:'./new-hero'},
    { label: 'Buscar', icon: 'search', url:'./search'}
  ]

}
