import { Component } from "@angular/core";

@Component({
    selector:'[app-header]',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    standalone:true
})
export class HeaderComponent{
    loggedInUser:{first_name:string,last_name:string,pfp_link:string} = {
        first_name:"Sagar",
        last_name:"Arora",
        pfp_link:"https://i.postimg.cc/cHg22LhR/profile-pic.png"
    }
}