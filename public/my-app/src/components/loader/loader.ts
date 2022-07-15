import { 
    Component,
    OnInit
  } from '@angular/core';

  declare var $:any;

  import { Singleton } from '../../refactoring/DataSingleton';
    
  @Component({
    selector: 'loader', // Asignar un nombre de etiqueta, únio
    templateUrl: './loader.html', // Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./loader.css'] // Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  // Debemos asignarle el nombre de nuestro componente
  // 
  //  Cambiar el nombre de AppComponent por el del nuestro
  export class LoaderComponent implements OnInit {

    ngOnInit() {
        var self = this;
        Singleton.GetInstance().ShowLoader = function() {
            self.ShowLoader();
        }

        Singleton.GetInstance().HideLoader = function() {
            self.HideLoader();
        }
    }

    ShowLoader() {
        this.active = true;
    }

    HideLoader() {
        this.active = false;
    }

    active = false;
  }