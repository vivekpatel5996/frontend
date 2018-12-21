import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LikingComponent } from './liking/liking.component';
import { CommentsComponent } from './comments/comments.component';
import { EditFieldComponent } from './edit-field/edit-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, FormsModule],
  declarations: [LoaderComponent, NotFoundComponent, LikingComponent, CommentsComponent, EditFieldComponent],
  exports: [LoaderComponent, LikingComponent, CommentsComponent, EditFieldComponent]
})
export class SharedModule {}
