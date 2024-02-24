import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
    selector: 'main-body',
    standalone: true,
    templateUrl: './mainbody.component.html',
    styleUrl: './mainbody.component.css',
    imports: [CommonModule]


})
export class MainBody {
    /** information about logged in user
     */
    loggedin_user:{first_name:string,last_name:string,pfp_link:string} = {
        first_name: "Sagar",
        last_name: "Arora",
        pfp_link: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
    }

    /**List of stories available for user

     */
    Stories:Array<{id:string,first_name:string,last_name:string,pfp_link:string,story_preview:string}> = [
        {
            id: "story2",
            first_name: "Alison",
            last_name: "",
            pfp_link: "https://i.postimg.cc/x8GxVJzz/status-2.png",
            story_preview: "https://i.postimg.cc/XNPtfdVs/member-1.png",

        },
        {
            id: "story3",
            first_name: "Jackson",
            last_name: "",
            pfp_link: "https://i.postimg.cc/cCG9zMrW/status-3.png",
            story_preview: "https://i.postimg.cc/4NhqByys/member-2.png",

        },
        {
            id: "story4",
            first_name: "Samona",
            last_name: "",
            pfp_link: "https://i.postimg.cc/3J7fCBsC/status-4.png",
            story_preview: "https://i.postimg.cc/FH5qqvkc/member-3.png",

        },
        {
            id: "story5",
            first_name: "John",
            last_name: "Doe",
            pfp_link: "https://i.postimg.cc/9Fp8x9V3/status-5.png",
            story_preview: "https://i.postimg.cc/Sx65bPcP/member-4.png",

        }
    ]

    /**List of Posts of feed for a user 
     */
    Posts:Array<{user_pfp:string,post_img:string,posted_by:string,posted_on:string,post_text:string,post_likes:number,post_comment:number,post_share:number}> = [
        {
            user_pfp:'https://i.postimg.cc/cHg22LhR/profile-pic.png',
            post_img:'https://i.postimg.cc/9fjhGTY6/feed-image-1.png',
            posted_by:'Sagar Arora',
            posted_on:'June 24 2021, 13:40 pm',
            post_text:'Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>',
            post_likes:120,
            post_comment:45,
            post_share:20,

        },
        {
            user_pfp:'https://i.postimg.cc/cHg22LhR/profile-pic.png',
            post_img:'https://i.postimg.cc/9fjhGTY6/feed-image-1.png',
            posted_by:'Sagar Arora',
            posted_on:'June 24 2021, 13:40 pm',
            post_text:'Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>',
            post_likes:1,
            post_comment:9,
            post_share:12,

        },
        {
            user_pfp:'https://i.postimg.cc/cHg22LhR/profile-pic.png',
            post_img:'https://i.postimg.cc/9fjhGTY6/feed-image-1.png',
            posted_by:'Sagar Arora',
            posted_on:'June 24 2021, 13:40 pm',
            post_text:'Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>',
            post_likes:0,
            post_comment:5,
            post_share:2,

        },
        {
            user_pfp:'https://i.postimg.cc/cHg22LhR/profile-pic.png',
            post_img:'https://i.postimg.cc/9fjhGTY6/feed-image-1.png',
            posted_by:'Sagar Arora',
            posted_on:'June 24 2021, 13:40 pm',
            post_text:'Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>',
            post_likes:20,
            post_comment:4,
            post_share:0,

        },
        {
            user_pfp:'https://i.postimg.cc/cHg22LhR/profile-pic.png',
            post_img:'https://i.postimg.cc/9fjhGTY6/feed-image-1.png',
            posted_by:'Sagar Arora',
            posted_on:'June 24 2021, 13:40 pm',
            post_text:'Subscribe <span>Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>',
            post_likes:12000,
            post_comment:405,
            post_share:200,

        },
        
        
    ]

    /**Represent the background style for story
     * 
     */
    backgroundImageStyle: any

    /**Hook which will be called whenever component is loaded
     * set the background style when component is loaded for story
     */
    ngOnInit() {
        this.backgroundImageStyle = this.getBackgroundImageStyle()
    }

    /**to get the background style for story
     * 
     * @returns {} background style for story
     */
    getBackgroundImageStyle():{} {
        return {

            'background-image': `linear-gradient(transparent, rgba(0,0,0,0.5)), url(${this.loggedin_user.pfp_link})`
        }
    }
    



}