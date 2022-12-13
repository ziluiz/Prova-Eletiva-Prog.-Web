import { ShowdataComponent } from './showdata/showdata.component';
import { data } from './data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, forkJoin } from 'rxjs';
import {tap} from "rxjs/operators"
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService{

baseURL:string=""

data: Data [] = [];



}
