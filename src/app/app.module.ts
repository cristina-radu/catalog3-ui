import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {TabsComponent} from "./catalog/tabs/tabs.component";
import {SubjectComponent} from "./catalog/tabs/subject/subject.component";
import {TeacherListComponent} from "./catalog/tabs/teacher-list/teacher-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TeacherItemComponent} from "./catalog/tabs/teacher-list/teacher-item/teacher-item.component";
import {AddUpdateTeacherComponent} from "./catalog/tabs/teacher-list/add-update-teacher/add-update-teacher.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TabsComponent,
    SubjectComponent,
    TeacherListComponent,
    TeacherItemComponent,
    AddUpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
