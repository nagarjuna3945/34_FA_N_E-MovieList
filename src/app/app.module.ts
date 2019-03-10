import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { getRoutes } from './routes'; 
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules

// App components
// import { AppComponent } from './app.component';


// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { AuthService } from './Auth_1/shared/services/auth.service';
import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';

// Auth service

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(getRoutes()),
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    BrowserAnimationsModule,
    AppRoutingModule1,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
