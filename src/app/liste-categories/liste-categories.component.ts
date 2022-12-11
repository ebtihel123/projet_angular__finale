import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { SportService } from '../services/sport.service';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: [
  ]
})
export class ListeCategoriesComponent implements OnInit {
  categories! : Categorie[];
  updatedCat:Categorie = {"idCat":0,"nomCat":""};
  ajout:boolean=true;


  constructor(private sportService :  SportService) { }

  ngOnInit(): void {this.sportService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
  }
  updateCat(cat:Categorie){
    this.updatedCat=cat;
    this.ajout=false;
  }
  categorieUpdated(cat:Categorie){
    console.log("Cat updated event",cat);
    this.sportService.ajouterCategorie(cat).
     subscribe( ()=> this.chargerCategories());
    }
  chargerCategories(): void {
    this.sportService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });
 
  

      
         
      


 


}}

