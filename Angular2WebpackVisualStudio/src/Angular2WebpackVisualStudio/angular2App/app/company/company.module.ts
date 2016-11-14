import { NgModule } from '@angular/core';

import { CompanyComponent } from './company/company.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
    imports: [
        CompanyRoutingModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule { }
