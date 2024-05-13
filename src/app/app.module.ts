import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from './directives/directives.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, DirectivesModule, AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {}