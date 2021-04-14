import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  busquedas:any[] = []
  termino: string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { 
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.busquedas = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.busquedas);
    })
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
