import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  generateColsFromClass(baseClass: any) {
    const mockClass: any = new baseClass();
    const colLIst = [];
    for (const k in mockClass) {
      if (k) {
        colLIst.push({key: k, title: this.toTitleCase(k)});
      }
    }

    return colLIst;
  }

  toTitleCase(str: string): string {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}
