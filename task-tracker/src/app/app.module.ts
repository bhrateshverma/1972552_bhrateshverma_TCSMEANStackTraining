import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
