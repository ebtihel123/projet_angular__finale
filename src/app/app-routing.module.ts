import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSportComponent } from './add-sport/add-sport.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { NourritureGuard } from './nourriture.guard';

import { SportComponent } from './sport/sport.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';

const routes: Routes = [{path: "sport", component : SportComponent},
{path : "add-sport", component : AddSportComponent, canActivate:[NourritureGuard]},
{ path: "", redirectTo: "sport", pathMatch: "full" },
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: "listeCategories", component : ListeCategoriesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path: "updateSport/:id", component: UpdateSportComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
