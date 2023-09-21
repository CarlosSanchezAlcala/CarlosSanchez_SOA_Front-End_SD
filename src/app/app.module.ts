import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LegalGuardianComponent } from './components/legal-guardian/legal-guardian.component';
import { LegalGuardianFormComponent } from './components/legal-guardian-form/legal-guardian-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListInactiveComponent } from './components/list-inactive/list-inactive.component';
import {NgOptimizedImage} from "@angular/common";
import { TransactionDataComponent } from './components/transaction-data/transaction-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalGuardianComponent,
    LegalGuardianFormComponent,
    ListInactiveComponent,
    TransactionDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
