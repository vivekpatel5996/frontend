import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { DetailsComponent } from './details/details.component';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, MatTooltipModule, UserRoutingModule, MatTabsModule, MatIconModule],
  declarations: [DetailsComponent]
})
export class UserModule {}
