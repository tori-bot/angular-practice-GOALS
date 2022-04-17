 //import { Goals } from './../goalList';
import { Goal } from '../goal' ;
import { Injectable } from '@angular/core';
//import { Goals } from '../goalList';
//import { Goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  getGoals(){
  return Goal
  }

  getGoal(id:any) {
    for (let goal of Goal){
      if (goal.id == id) {
        return goal;
      }
    }
  }

  constructor() {
    
  }
}
