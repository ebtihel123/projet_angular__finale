import { Component, OnInit } from '@angular/core';
import { Sport} from '../model/Sport.model';
import { AuthService } from '../services/auth.service';
import { SportService } from '../services/sport.service';


@Component({
  selector: 'app-sports',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  sports! : Sport[]; //un tableau de Produit
  constructor(private sportService: SportService, 
    public authService: AuthService) {
     //this.produits=[];
  }


  
    ngOnInit(): void {
      this.chargerSport();
      }
      chargerSport(){
        this.sportService.listeSport().subscribe(nourts => {
        console.log(nourts);
        this.sports= nourts;
      });
      }
      supprimerSport(p: Sport)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
         this.sportService.supprimerSport(p.idSport!).subscribe(() => {
         console.log("sport supprimé");
         this.chargerSport();
      });
      } 
}
