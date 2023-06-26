import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-login',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css']
})

export class LoginForm  implements OnInit{
userName: any;
formData:any;
password:any;
ngOnInit(){
    this.formData  = new FormGroup({
        userName: new FormControl('userName'),
        password : new FormControl('Password')
    });
}
OnClickSubmit(data:any){
    this.userName = data.userName;
    this.password = data.password;
}
}