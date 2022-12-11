import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Sport} from '../model/Sport.model';
import { SportService } from '../services/sport.service';
@Component({
  selector: 'app-add-nourriture',
  templateUrl:'./add-sport.component.html',

})
export class AddSportComponent implements OnInit {
  newSport = new Sport();
  message!: string;
  categories! : Categorie[];
   newIdCat! : number;
  newCategorie! : Categorie;
  constructor(private sportService: SportService ,private router :Router)  { }

  ngOnInit() {this.sportService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    }
    
  
    addSport(){
    this.newSport.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.sportService.ajouterSport(this.newSport).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['sport']);
   });
    }
    
    

}
