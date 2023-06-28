import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];

  heroeSeleccinado!: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {

  }

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  opcionSeleccinada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.heroeSeleccinado = undefined;
      console.log('no hay valor');
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroesPorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccinado = heroe)
  }

}
