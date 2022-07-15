import { Component, OnInit } from "@angular/core";

declare var $:any;

import { Singleton } from "src/refactoring/DataSingleton";

@Component({
    selector: 'inicio',
    templateUrl: './inicio.html',
    styleUrls: ['./inicio.css']
})

export class InicioComponent implements OnInit {
    ngOnInit(){
        this.GetUsers();
        this.GetPosts();
        
        // this.GetComments();
    }

    GetPosts(){
        Singleton.GetInstance().ShowLoader();
        var self = this;
        $.ajax({
            type: 'GET',
            url: 'https://gorest.co.in/public/v2/posts',
            success: function(res: any) {
                self.posts = res;
                Singleton.GetInstance().HideLoader();
            }
        })
    }

    GetUsers(){
        Singleton.GetInstance().ShowLoader();
        var self = this;

        $.ajax({
            type: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            success: function(res: any) {
                self.users = res;
                Singleton.GetInstance().HideLoader();
            },
        })
    }

    GetComments(){
        Singleton.GetInstance().ShowLoader();
        var self = this;
        $.ajax({
            type: 'GET',
            URL: `http://localhost:3000/posts/`,
            success: (res: any) => {
                self.posts = res;
                Singleton.GetInstance().HideLoader();
            }
        })
    }

    posts = new Array;
    users = new Array;
    comments = new Array;
}