import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiManagerService {

  constructor(private http: Http) { }

  getRequest(url:string): Promise<any> {
    return this.http.get(url).toPromise().catch(this.handleError);
  }

  postRequest(url:string, payload:Object ): Promise<any> {
    return this.http.post(url, payload).toPromise().catch(this.handleError);
  }

  putRequest(url:string, payload:Object): Promise<any> {
    return this.http.put(url, payload ).toPromise().catch(this.handleError);
  }

  deleteRequest(url:string, payload:Object): Promise<any> {
    return this.http.delete(url, payload).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {    
    return Promise.reject(error.message || error);
  }

}
