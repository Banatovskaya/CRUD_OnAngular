import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectoryListComponent } from './components/directory-list/directory-list.component';
import { DirectoryItemComponent } from './components/directory-item/directory-item.component';
import { OpenWindowComponent } from './components/open-window/open-window.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryListComponent,
    DirectoryItemComponent,
    OpenWindowComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
