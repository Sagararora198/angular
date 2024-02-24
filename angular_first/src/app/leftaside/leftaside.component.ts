import { Component } from "@angular/core";

@Component({
    selector:"left-aside",
    standalone:true,
    templateUrl:'./leftaside.component.html',
    styleUrl:'./leftaside.component.css',

})
export class LeftAsideComponent{
    Shortcuts:Array<{id:number,shortcut_name:string,shortcut_img:string}> = [
        {
            id:1,
            shortcut_name:"Web Developers",
            shortcut_img:"https://i.postimg.cc/3JHVf7vG/shortcut-1.png"
        },
        {
            id:2,
            shortcut_name:"Web Design course",
            shortcut_img:"https://i.postimg.cc/rFCbvb1P/shortcut-2.png"
        },
        {
            id:3,
            shortcut_name:"Full Strack Development",
            shortcut_img:"https://i.postimg.cc/0yk3xfZ2/shortcut-3.png"
        },
        {
            id:4,
            shortcut_name:"Website Experts",
            shortcut_img:"https://i.postimg.cc/Z5wQqdDP/shortcut-4.png"
        }
    ]

}