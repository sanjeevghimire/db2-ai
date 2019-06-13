import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PredictionComponent } from './prediction/prediction.component';
import { PredictionService } from './services/prediciton.service';

@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
