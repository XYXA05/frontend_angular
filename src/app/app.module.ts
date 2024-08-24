import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  {NewBuildComponent} from './page/new-build/new-build.component';
import { RouterModule } from '@angular/router';
import { NewBuildAboutTheProjectComponent } from './page/new-build-about-the-project/new-build-about-the-project.component';
import { MainNavbarComponent } from './plagin/main-navbar/main-navbar.component';
import { PlanirovkaComponent } from './plagin/planirovka/planirovka.component';
import { InputTernComponent } from './plagin/input-tern/input-tern.component';
import { CartBuilderComponent } from './plagin/cart-builder/cart-builder.component';
import { MainNavbarSmallComponent } from './plagin/main-navbar-small/main-navbar-small.component';
import { SearchInputComponent } from './plagin/search-input/search-input.component';
import { NewBuildPlanningComponent } from './page/new-build-planning/new-build-planning.component';
import { RangeInputComponent } from './plagin/range-input/range-input.component';
import { FilterPipe } from './filter.pipe';
import { MainNavbarButtonComponent } from './plagin/main-navbar-button/main-navbar-button.component';
import { MainNavbar2Component } from './plagin/main-navbar2/main-navbar2.component';
import { ConstructionMonitoringComponent } from './page/construction-monitoring/construction-monitoring.component';
import { Grafic0Component } from './plagin/grafic0/grafic0.component';
import { TermsOfFinancingComponent } from './plagin/terms-of-financing/terms-of-financing.component';
import { MapComponent } from './plagin/map/map.component';
import { AerialSurvey360Component } from './page/aerial-survey-360/aerial-survey-360.component';
import { DocumentPutiComponent } from './plagin/document-puti/document-puti.component';
import { CartBuilderBigComponent } from './plagin/cart-builder-big/cart-builder-big.component';
import { BuildersComponent } from './page/builders/builders.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { DocumentsForBuildComponent } from './page/documents-for-build/documents-for-build.component';
import { BuildersPageComponent } from './page/builders-page/builders-page.component';
import { PhotoSliderMonitoringComponent } from './plagin/photo-slider-monitoring/photo-slider-monitoring.component';
import { NgxView360Module } from "@egjs/ngx-view360";
import { PaginatorComponent } from './plagin/paginator/paginator.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NewCattagesComponent } from './cattage/new-cattages/new-cattages.component';
import { StasticPageComponent } from './statistics/stastic-page/stastic-page.component';
import { FooterComponent } from './plagin/footer/footer.component';
import { MapProjectNewBuildComponent } from './plagin/map-project-new-build/map-project-new-build.component';
import { MapForBuilderComponent } from './plagin/map-for-builder/map-for-builder.component';
import { CartImageComponent } from './plagin/cart-image/cart-image.component';
import { WriteMassageComponent } from './plagin/write-massage/write-massage.component';
import { LoudingComponent } from './plagin/louding/louding.component';
import { UniquePipe } from './filter.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    NewBuildComponent,
    AppComponent,
    NewBuildAboutTheProjectComponent,


    UniquePipe,
    MainNavbarComponent,
    PlanirovkaComponent,
    InputTernComponent,
    CartBuilderComponent,
    MainNavbarSmallComponent,
    SearchInputComponent,
    NewBuildPlanningComponent,
    RangeInputComponent,
    FilterPipe,
    MainNavbarButtonComponent,
    MainNavbar2Component,
    ConstructionMonitoringComponent,
    Grafic0Component,
    TermsOfFinancingComponent,
    MapComponent,
    AerialSurvey360Component,
    DocumentPutiComponent,
    CartBuilderBigComponent,
    BuildersComponent,
    ContactsComponent,
    DocumentsForBuildComponent,
    BuildersPageComponent,
    PhotoSliderMonitoringComponent,
    PaginatorComponent,
    NewCattagesComponent,
    StasticPageComponent,
    FooterComponent,
    MapProjectNewBuildComponent,
    MapForBuilderComponent,
    CartImageComponent,
    WriteMassageComponent,
    LoudingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgxView360Module,
    NgxMapLibreGLModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
