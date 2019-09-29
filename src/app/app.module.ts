import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Third party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SmoothieRecipeComponent } from './recipes/smoothie-recipe/smoothie-recipe.component';
import { ModalComponent } from './shared/modal/modal.component';

//Services
import { AlertService } from './shared/alert/alert.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ModalService } from './shared/modal/modal.service';
import { RecipeService } from './recipes/recipe.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    RecipesComponent,
    SmoothieRecipeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScrollingModule,    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AlertService,
    AuthService,
    AuthGuard,
    ModalService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
