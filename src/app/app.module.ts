import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
// import { StarWarsService } from './star-wars.service';
// import { TopBarComponent } from './top-bar/top-bar.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
  ],
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    // TopBarComponent,
    // ProductListComponent,
    // CartComponent,
  ],
  bootstrap: [AppComponent],
  providers: [StarWarsService, LogService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
