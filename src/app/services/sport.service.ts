import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Sport } from '../model/Sport.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { apiURL } from '../config';
import { CategorieWrapper } from '../model/CategorieWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class SportService {
  apiURLCat: string = 'http://localhost:8887/sport/cat' ;
  apiURL: string = 'http://localhost:8087/sport/api';

sports! : Sport[]; //un tableau de Produit
//produit! : Produit;
// categories : Categorie[];
constructor(private http : HttpClient) {
// this.categories = [ {idCat : 1, nomCat : "PC"},
// {idCat : 2, nomCat : "Imprimante"}];
// this.produits = [
// { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600,
// dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
// { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450,
// dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
// { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123,
// dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}}
// ];
}
listeSport(): Observable<Sport[]>{
  return this.http.get<Sport[]>(apiURL+"/all");
  }

  ajouterSport( prod: Sport):Observable<Sport>{
    return this.http.post<Sport>(apiURL, prod, httpOptions);
    }
    supprimerSport(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterSport(id: number): Observable<Sport> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Sport>(url);
        }
        updateSport(prod :Sport) : Observable<Sport>
        {
        return this.http.put<Sport>(apiURL, prod, httpOptions);
        }

        listeCategories():Observable<CategorieWrapper>{
          return this.http.get<CategorieWrapper>(this.apiURLCat);
          }
          rechercherParCategorie(idCat: number):Observable< Sport[]> {
            const url = `${apiURL}/norrscat/${idCat}`;
             return this.http.get<Sport[]>(url);
            }
            rechercherParNom(nom: string):Observable< Sport[]> {
              const url = `${apiURL}/prodsByName/${nom}`;
              return this.http.get<Sport[]>(url);
              }
        
  ajouterCategorie( cat: Categorie):Observable<Categorie>{
      return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
      }

 

   
  
  //updateNourriture(p:Nourriture)
  //{
  // console.log(p);
  //this.supprimerNourriture(p);
  //this.ajouterNourriture(p);
        }
  
  







  
    

  
  



