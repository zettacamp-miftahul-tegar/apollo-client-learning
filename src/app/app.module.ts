import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'schools',
    loadChildren: () => import('./schools-management/schools-management.module').then((m) => m.SchoolsManagementModule),
  },
  {
    path: 'title',
    loadChildren: () => import('./title-management/title-management.module').then((m) => m.TitleManagementModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users-management/users-management.module').then((m) => m.UsersManagementModule),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
