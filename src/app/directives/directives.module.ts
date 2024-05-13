import { NgModule } from '@angular/core';
import { ReqFieldDirective } from './requiredField.directive';

@NgModule({
  declarations: [ReqFieldDirective],
  exports: [ReqFieldDirective]
})
export class DirectivesModule {}