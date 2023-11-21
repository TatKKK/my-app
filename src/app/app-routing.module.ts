import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'links', component:LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
