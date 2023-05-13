import { Component, OnInit ,OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';


@Component({
    selector: 'awyncAwait-demo',
    templateUrl: './asyncAwaitDemo.html',
    // styleUrls: ['./app.component.css']
})
export class AsyncAwaitDemo implements OnInit , OnDestroy  {
    users: any;
    obs: any;
    subscription: Subscription | undefined ;
    constructor(private _httpClient: HttpClient) {
    }
    async ngOnInit() {
        
       //  httpClinet is internally using observabbles and so we need to subscribe to it
        this._httpClient.get("https://reqres.in/api/users?page=2").subscribe(res =>
            this.users = res
        );
        // Region subscription
          this.subscription = this.getUsersData().subscribe(x=>
             console.log("inside subscription"+ x));
    // trying await and aync with observables . Here getUserData returns a observable which we need to 
    //subscribe . Here since it is observable using await , it will not waiit for obserbale to get data , 
    // so it will excute the next line of code
        try {
            await this.getUsersData().subscribe(
                response =>
                {
                    this.users = response,
                    console.log(this.users.data[0])
                }
                    
            );
          console.log("after observable call");
        }
        catch (err:any){
            let errorMessage = '';
            if (err.error instanceof ErrorEvent) {
    
                errorMessage = `An error occurred: ${err.error.message}`;
            } else {
    
                errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            }
            console.log(errorMessage);
        }
    // here we are trying to use await with the promise call , so here it will wait for to resolve 
    // the promise and then excute the next line of code 

        this.users = await this.getData();
        console.log(this.users.data[0]);
        console.log("after promise call");
// when we use .then with promise it will not wait for promise to resolve it will go ahead and excute next 
// line of code 
        this.getData().then(response => {
            this.users = response;
            console.log(this.users.data[0]);
        });
        console.log("after promise then call");
    }
    getUsersData(): Observable<any> {
        return this._httpClient.get("https://reqres.in/api/users?page=2");
    }
    getData () :Promise<any>{
        return new Promise ((resolve , reject)=>{
            this._httpClient.get("https://reqres.in/api/users?page=2").subscribe(res =>
            resolve(res));
        });
    }
     ngOnDestroy(){
       this.subscription?.unsubscribe();
     }
}