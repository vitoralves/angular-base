import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { UtilService } from '../util/util.service';

@Injectable()
export class LoginService {

  constructor(private http: Http, private util: UtilService) {  }

  logar(){
    
  }
}
