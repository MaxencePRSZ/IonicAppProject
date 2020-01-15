
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class RestService {

	// Changer l'api key si trop de requetes ont été faites sur la meme key
	const apiKey="8465d792b5f742559031ec962d38ad28"
	//const apiKey="9287c41c94b34dd9b88a223d7ce0ee97"

	constructor(private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
     		 // A client-side or network error occurred. Handle it accordingly.
     		 console.error('An error occurred:', error.error.message);
		} else {
		    // The backend returned an unsuccessful response code.
		    // The response body may contain clues as to what went wrong,
		    console.error(
		    	`Backend returned code ${error.status}, ` +
		    	`body was: ${error.error}`);
		}
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
	}

	private extractData(res: Response) {
		let body = res;
		return body || { };
	}



	getRecipes(): Observable<any> {
		const apiUrl = "https://api.spoonacular.com/recipes/search?number=20&apiKey=" + this.apiKey;

		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));

		// return {"results":[{"id":592479,"title":"Kale and Quinoa Salad with Black Beans","readyInMinutes":50,"servings":6,"image":"Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg","imageUrls":["Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg"]},{"id":547775,"title":"Creamy Avocado Pasta","readyInMinutes":15,"servings":2,"image":"Creamy-Avocado-Pasta-547775.jpg","imageUrls":["Creamy-Avocado-Pasta-547775.jpg"]}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":20,"totalResults":313743,"processingTimeMs":671,"expires":1579198408440,"isStale":false}


	}

	getRecipe(id:any): Observable<any> {
		const apiUrl = "https://api.spoonacular.com/recipes/"+id+"/information?includeNutrition=false&apiKey="+this.apiKey

		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));

		// return {"recipe": {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35382", "ingredients": ["2 jalapeno peppers, cut in half lengthwise and seeded", "2 slices sour dough bread", "1 tablespoon butter, room temperature", "2 tablespoons cream cheese, room temperature", "1/2 cup jack and cheddar cheese, shredded", "1 tablespoon tortilla chips, crumbled\n"], "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html", "recipe_id": "35382", "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg", "social_rank": 100.0, "publisher_url": "http://closetcooking.com", "title": "Jalapeno Popper Grilled Cheese Sandwich"}}

	}

	getTodo(id:any): Observable<any> {

		const apiUrl = "http://localhost:3000/api/todo/" + id;

		return this.http.get(apiUrl, httpOptions).pipe(
			map(this.extractData),
			catchError(this.handleError));

	}

	editTodo(id:any, title:any, description:any) {
		
		const apiUrl = "http://localhost:3000/api/update/todo/" + id;
		var postData = {
			'title' : title,
			'description' : description
		}
		return this.http.put(apiUrl, postData, httpOptions).
		subscribe(res => {
			console.log(res);
		}, err => {
			console.log(err);
		});
	}

	deleteTodo(id:any) : Observable<any> {

		const apiUrl = "http://localhost:3000/api/delete/todo/" + id;
	    // console.log("id from rest serv" +id);
	    // console.log(this.http.delete(apiUrl));
	    return this.http.delete(apiUrl, httpOptions).pipe(

	    	catchError(this.handleError));

	}



}