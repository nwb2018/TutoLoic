import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { userRoutes} from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
    ],
    declarations:[
        LoginComponent,
        ProfileComponent
    ],
    providers:[
       
        
    ],

})

export class UserModule{

}