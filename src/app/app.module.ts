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
import {RequestService} from "./service/request.service";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {TeacherSubjectListComponent} from "./catalog/tabs/teacher-list/add-update-teacher/teacher-subject-list/teacher-subject-list.component";
import {TeacherSubjectComponent} from "./catalog/tabs/teacher-list/add-update-teacher/teacher-subject-list/teacher-subject/teacher-subject.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TabsComponent,
    SubjectComponent,
    TeacherListComponent,
    TeacherItemComponent,
    AddUpdateTeacherComponent,
    TeacherSubjectListComponent,
    TeacherSubjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [RequestService/*, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
