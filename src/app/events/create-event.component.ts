import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
    em{float:right; color: #E05C65 ; padding-left:10px}
    .error input{background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :-ms-input-placeholder {color:#999;}

  `]

})


export class CreateEventComponent{
    isDirty: boolean = true;
    newEvent
    constructor(private eventService:EventService, private route: Router){}

    saveEvent(formValues){
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this.isDirty=false;
        this.route.navigate(['/events']);

    }

    cancel(){
        this.route.navigate(['/events'])
    }

}