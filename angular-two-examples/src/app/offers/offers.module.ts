import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list.component';
import { OffersListItemComponent } from './offers-list-item.component';
import {RouterModule} from '@angular/router'
import { OFFERS_ROUTES} from './offers.routes'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OFFERS_ROUTES)
  ],
  declarations: [OffersListComponent, OffersListItemComponent]
})
export class OffersModule { }
