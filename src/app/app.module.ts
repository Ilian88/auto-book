import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NavButtonsComponent } from './shared/nav-buttons/nav-buttons.component';
import { FooterComponent } from './footer/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './home/main/main.component';
import { SingleCardComponent } from './shared/card/single-card/single-card.component';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateUpdateDialogueComponent } from './shared/dialog/create-update-dialogue/create-update-dialogue.component';
import {MatInputModule} from '@angular/material/input'; 
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './effects/cars.effects';
import { carsReducer } from './reducers/cars.reducer';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { DetailsComponent } from './details/details/details.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard, LoggedInUserGuard, NotLoggedInUserGuard } from './router-guards/auth.guard';
import {MatSelectModule} from '@angular/material/select';
import { ErrorComponentComponent } from './error/error-component/error-component.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavButtonsComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    SingleCardComponent,
    CreateUpdateDialogueComponent,
    DetailsComponent,
    AdminComponent,
    ErrorComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cars/:id', component: DetailsComponent , canActivate: [NotLoggedInUserGuard] },
      { path: 'admin', component: AdminComponent, canActivate: [NotLoggedInUserGuard, AdminGuard] } 
    ], {onSameUrlNavigation: 'reload'}),
    EffectsModule.forRoot([CarsEffects]),
    BrowserAnimationsModule,
    StoreModule.forRoot({login: authReducer, carsReducer: carsReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [{  
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
