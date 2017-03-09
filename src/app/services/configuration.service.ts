import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

export interface AppConfig {
  SERVER_URL: string;
}

@Injectable()
export class ConfigurationService {
  configuration: AppConfig;

  constructor(
    private http: Http
  ) {
    this.configuration = {
      SERVER_URL: null
    };
  }

  loadConfiguration(): Observable<void> {
    return this.http
      .get('assets/config.json')
      .map(response => {
        let configJson = response.json();
        Object.assign(this.configuration, configJson);
      });
  }
}
