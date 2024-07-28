import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBuildComponent } from './page/new-build/new-build.component';
import { NewBuildAboutTheProjectComponent } from './page/new-build-about-the-project/new-build-about-the-project.component';
import { MainNavbarComponent } from './plagin/main-navbar/main-navbar.component';
import { InputTernComponent } from './plagin/input-tern/input-tern.component';
import { CartBuilderComponent } from './plagin/cart-builder/cart-builder.component';
import { NewBuildPlanningComponent } from './page/new-build-planning/new-build-planning.component';
import { ConstructionMonitoringComponent } from './page/construction-monitoring/construction-monitoring.component';
import { AerialSurvey360Component } from './page/aerial-survey-360/aerial-survey-360.component';
import { BuildersComponent } from './page/builders/builders.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { DocumentsForBuildComponent } from './page/documents-for-build/documents-for-build.component';
import { BuildersPageComponent } from './page/builders-page/builders-page.component';
import { NodeWithI18n } from '@angular/compiler';
import { NewCattagesComponent } from './cattage/new-cattages/new-cattages.component';
import { StasticPageComponent } from './statistics/stastic-page/stastic-page.component';
import { MainNavbar2Component } from './plagin/main-navbar2/main-navbar2.component';



const routes: Routes = [
  {path:'new_build', component:NewBuildComponent, pathMatch:'full'},
  {path:'build_about_the_project/:id', component:NewBuildAboutTheProjectComponent, pathMatch:'full'},
  {path:'new_build_planing/:id', component:NewBuildPlanningComponent, pathMatch:'full'},
  {path:'construction_monitoring/:id', component:ConstructionMonitoringComponent, pathMatch:'full'},
  {path:'aerial_survay_360/:id', component:AerialSurvey360Component, pathMatch:'full'},
  {path:'bulders', component:BuildersComponent, pathMatch:'full'},
  {path:'contact/:id', component:ContactsComponent, pathMatch:'full'},
  {path:'document/:id', component:DocumentsForBuildComponent, pathMatch:'full'},
  {path:'document_page/:id', component:BuildersPageComponent, pathMatch:'full'},
  {path:'new_cattages', component:NewCattagesComponent, pathMatch:'full'},
  {path:'static', component:StasticPageComponent, pathMatch:'full'},


  {path:'main_navbar', component:MainNavbarComponent, pathMatch:'full'},
  {path:'main_navbar_2/:id', component:MainNavbar2Component, pathMatch:'full'},
  {path:'aaa', component:InputTernComponent, pathMatch:'full'},
  {path:'a', component:CartBuilderComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
