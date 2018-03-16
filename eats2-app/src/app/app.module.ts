import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StatusPipe } from './menu/status.pipe';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { TitleStatusPipe } from './menu/title-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StatusPipe,
    LoginComponent,
    FooterComponent,
    TitleStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
