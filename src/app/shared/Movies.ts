import {IGenre} from '../shared/Genre';
export interface IMovie {
    id: number;
    description: string;
    title: string;
    poster_path: string;
    vote_average : number;
    popularity : number;
    original_title : string;
    overview : string;
    release_date : Date;
    revenue : string;
    homepage:string;
    geners : IGenre[];
    backdrop_path : string;
    asdsf : string;
    // genre_ids : IGenre[];

}