import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {TodoModule} from "./todos/todo.module";
import {FooterComponent} from './footer/footer.component';
import {environment} from '../environments/environment';
// NgRx
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {appReducers} from "./app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
