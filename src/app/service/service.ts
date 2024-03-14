import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class mainService { 
    constructor(private readonly httpClient:HttpClient) {
        
    }
    public getTasks():Observable<any> {
        return this.httpClient.get("https://localhost:7283/api/Task");
    }
    public setTask(task: any) {
        const headers = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          }
        return this.httpClient.post("https://localhost:7283/api/Task", task, headers);
    }
    public removeTask(name: string):Observable<any> {
        const headers = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          }
        return this.httpClient.post("https://localhost:7283/api/Task/delete/?name="+ name, headers);
    }}