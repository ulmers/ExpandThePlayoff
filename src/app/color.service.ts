import { Injectable } from '@angular/core';

import teaminfo from '../teaminfo.json';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  getPrimaryColor(teamName: string): string {

    return teaminfo[teamName]['primary-color'].toString();
  }

  getSecondaryColor(teamName: string): string {
    return teaminfo[teamName]['secondary-color'].toString();
  }

}
