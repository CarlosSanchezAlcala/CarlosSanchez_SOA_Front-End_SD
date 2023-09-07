import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LegalGuardianComponent} from "./components/legal-guardian/legal-guardian.component";
import {LegalGuardianFormComponent} from "./components/legal-guardian-form/legal-guardian-form.component";
import {ListInactiveComponent} from "./components/list-inactive/list-inactive.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'legal-guardian'
  },
  {
    path: 'legal-guardian',
    component: LegalGuardianComponent
  },
  {
    path: 'legal-guardian-form',
    component: LegalGuardianFormComponent
  },
  {
    path: 'list-inactive',
    component: ListInactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
