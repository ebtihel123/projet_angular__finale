import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

import { Sport } from '../model/Sport.model';

import { SportService } from '../services/sport.service';


@Component({
  selector: 'app-update-sport',
  templateUrl: './update-sport.component.html',
  styles: [
  ]
})
export class UpdateSportComponent implements OnInit {
  currentSports= new Sport();
  categories! : Categorie[];
updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

    private sportService: SportService) { }

    ngOnInit(): void {
      this.sportService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });
      this.sportService.consulterSport(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentSports = prod;
      this.updatedCatId = this.currentSports.categorie.idCat;
      } ) ;}


      updateSport() {
        this.currentSports.categorie = this.categories.find(
          cat => cat.idCat == this.updatedCatId)!;
       this.sportService.updateSport(this.currentSports).subscribe(prod => {

      this.router.navigate(['sport']); }
       );

        }



}
