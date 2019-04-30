import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormControlValidationMsgDirective } from './directives/formcontrol-validation-msg.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSubmitValidationMsgDirective } from './directives/formsubmit-validation-msg.directive';
import { ValidationMsgService } from './service/validation-msg.service';

@NgModule({
  declarations: [
    AppComponent,
    FormControlValidationMsgDirective,
    FormSubmitValidationMsgDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ValidationMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
