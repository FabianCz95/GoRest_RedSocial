import { Component, OnInit } from "@angular/core";

declare var $:any;

import { Singleton } from "../../refactoring/DataSingleton";

@Component({
    selector: 'user',
    templateUrl: './user.html',
    styleUrls: ['./user.css']
})

export class UserComponent implements OnInit {
    ngOnInit() {
        this.GetUserData();

    }

    GetUserData(){
        var self = this;
        $.ajax({
            type: "GET",
            url: 'https://gorest.co.in/public/v2/users/4077',
            success: (datosUsuario: any) => {
                self.userData = datosUsuario;
            }

        })
    }


    UpdateValue(event: any, property: String) {
        var value = event.target.value;
        switch (property) {
            case 'email':
                    this.userData.email = value
                break;
                case 'name':
                    this.userData.name = value
                break;
                case 'gender':
                    this.userData.gender = value
                break;
                case 'status':
                    this.userData.status = value
                break;      
        }
    }


    userData ={
        name: '',
        email: '',
        gender: '',
        status: ''
    };

    Editing = {
        name: false,
        email: false,
        gender: false,
        status: false
    }

    UpdateInfo(property: String) {
        // Singleton.GetInstance().ShowLoader();
        var self = this;
        var data = {};
    
        // $.ajax({
        //   type: 'PUT',
        //   url: 'http://localhost:3000/users/' + '4077',
        //   data: data,
        //   success: function(result: any) {
        //     Singleton.GetInstance().HideLoader();
        //     self.name = self.userData.name;
        //     self.realUserEmail = self.userData.email;
        //     self.Editing[property] = false;
        //     self.errorInfo = '';
        //   },
        //   error: function(err: any) {
        //     Singleton.GetInstance().HideLoader();
        //     self.errorInfo = err.responseJSON.error || err.responseJSON.message;
        //     self.userData.nickname = self.realUserNickname;
        //     self.userData.email = self.realUserEmail;
        //   }
        // })
      }
}