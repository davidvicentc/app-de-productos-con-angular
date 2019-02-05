import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductsComponent } from "./components/products/products.component";

import { AngularFireModule } from "@angular/fire"; //cionectar servicios de firebase
import { environment } from "../environments/environment"; // datos de firebase
import { AngularFirestoreModule } from "@angular/fire/firestore"; //modulo de firestore

@NgModule({
  declarations: [AppComponent, ProductFormComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
