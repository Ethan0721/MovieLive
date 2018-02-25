import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppError } from '../shared/app.error';
import { NotFoundError } from '../shared/not.found.error';



export abstract class AbstractBaseService<T> {
    constructor(protected _http: HttpClient, protected actionUrl: string) {
    }

    getAll(): Observable<T[]> {
        return this._http.get(this.actionUrl)
            .map(resp => resp as T[])
            .catch(this.handleError);

    }
    getOne(id: number): Observable<T> {
        return this._http.get(`${this.actionUrl}${id}`)
            .map(resp => resp as T)
            .catch(this.handleError);

    }

    update(resource) {
        return this._http.patch(this.actionUrl + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(response => response)
            .catch(this.handleError);
    }

    delete(id) {
        return this._http.delete(this.actionUrl + '/' + id)
            .map(response => response)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        //if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }

        if (error.status === 404) { return Observable.throw(new NotFoundError()); }

        return Observable.throw(new AppError(error));
    }
}

