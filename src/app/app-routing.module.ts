import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { SummaryComponent } from './summary/summary.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { ErrorsComponent } from './errors/errors.component';

import { CardsRoutingModule } from './cards/cards-routing.module';
import { EntryRoutingModule } from './entry/entry-routing.module';
import { StructuresRoutingModule } from './structures/structures-routing.module';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'summary/:id', component: SummaryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorsComponent }
];

@NgModule({
  imports: [
    CardsRoutingModule,
    EntryRoutingModule,
    StructuresRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
