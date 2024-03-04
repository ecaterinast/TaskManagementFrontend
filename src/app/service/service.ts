import { HttpClient } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
@Injectable({providedIn:'root'})
export class mainService { 
    constructor(private readonly httpClient:HttpClient) {
        
    }
    public getTask() {
        return this.httpClient.get("https://localhost:7283/api/Task");
    }
}