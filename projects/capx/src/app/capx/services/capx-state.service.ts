import { JunctionCapacityAnalyser } from './models/junction-capacity-analyser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapxStateService {

  analyser: JunctionCapacityAnalyser = new JunctionCapacityAnalyser();

  constructor() {
    this.analyser.solve();
   }
}
