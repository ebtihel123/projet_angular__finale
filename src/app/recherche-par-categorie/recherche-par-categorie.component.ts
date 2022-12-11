import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';

import { Sport} from '../model/Sport.model';

import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  sports! : Sport[];
  IdCategorie! : number;
  categories! : Categorie[];
  constructor(private sportservice :SportService ) { }

  ngOnInit(): void {
    this.sportservice.listeCategories().subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
    onChange() {
      this.sportservice.rechercherParCategorie(this.IdCategorie).
      subscribe(prods =>{this.sports=prods});
      }
    

}
