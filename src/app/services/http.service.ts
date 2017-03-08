import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class HttpService {

  constructor(
    private configurationService: ConfigurationService,
    private http: Http
  ) { }

  get(url: string): Observable<any> {
    return this.http
      .get(this.configurationService.configuration.SERVER_URL + url)
      .map(response => response.json());
  }

}
