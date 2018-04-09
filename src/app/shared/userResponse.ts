import { IMovie } from "./Movies";
import { ICast } from "./Cast";
import {ICrew} from "./Crew";

export interface IuserResponse {
    
    results : IMovie[];
    id : number;
}

export interface IcastResponse{
    id : number;
    cast : ICast[];
    crew : ICrew[];
}