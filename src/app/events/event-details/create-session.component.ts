import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISessions } from "../shared/event.model";

@Component({
    templateUrl:'./create-session.component.html',
    styles:[`
    em{float:right; color: #E05C65 ; padding-left:10px}
    .error input{background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :-ms-input-placeholder {color:#999;}

  `]
})

export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;
    ngOnInit(): void {
        this.name=new FormControl('', Validators.required);
        this.presenter=new FormControl('', Validators.required);
        this.duration=new FormControl('', Validators.required);
        this.level=new FormControl('', Validators.required);
        this.abstract=new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords]);

        this.newSessionForm= new FormGroup({
            name: this.name,
            presenter:this.presenter,
            duration: this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }


    saveSession(formValue){
        let session:ISessions={
            name: formValue.name,
            duration: +formValue.duration,
            level: formValue.level,
            presenter: formValue.presenter,
            abstract: formValue.abstract,
            id: undefined,
            voters: []
        }
    }

    private restrictedWords(control:FormControl):{[key:string]: any}{
        return control.value.include("foo") ? {'restrictedWords': 'foo'}:null;
    }
}