import { Component } from "@angular/core";

@Component({
    selector:'right-main',
    standalone:true,
    templateUrl:'./rightmain.component.html',
    styleUrl:'./rightmain.component.css'

})
export class RightMain{
    Events:Array<{
        event_date:number,
        event_month:string,
        event_heading:string,
        event_location:string,


    }> = [
        

    ]
}