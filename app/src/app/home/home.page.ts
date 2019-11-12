import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})

export class HomePage {

	todos : any;
	recipes : any;
	api : RestService;

	constructor(public restapi: RestService, public loadingController: LoadingController, public navController : NavController) {

		this.api = restapi;
	}

	async getTodos() {
		const loading = await this.loadingController.create({
			message: 'Loading'
		});

		await loading.present();
		await this.api.getTodos()
		.subscribe(res => {
			this.todos = res;
			loading.dismiss();
		}, err => {
			console.log(err);
			loading.dismiss();
		});

	}

	async getRecipes(){
		// const loading = await this.loadingController.create({
		// 	message: 'Loading'
		// });

		// await loading.present();

		// await this.api.getRecipes()
		// .subscribe(res => {
		// 	console.log(res);
		// 	this.recipes = res.recipes;
		// 	loading.dismiss();
		// }, err => {
		// 	console.log(err);
		// 	loading.dismiss();
		// });

		this.recipes = this.api.getRecipes().recipes
	}



	done(id: any) {
		console.log("done");
	}

	async deleteTodo(id:any) {
		await this.api.deleteTodo(id)
		.subscribe(res => {
			console.log(res);
			this.getTodos();
		}, err => {
			console.log(err);
		});
	}


	ngOnInit() {
		this.getRecipes();
	}


}