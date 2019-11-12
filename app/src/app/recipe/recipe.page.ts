import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.page.html',
	styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
	recipe : any;
	api : RestService;
	id : string;

	constructor(public restapi: RestService, public loadingController: LoadingController, private route: ActivatedRoute) {

		this.api = restapi;
		this.recipe = {};
		this.id="";
	}

	async getRecipe(id:any) {
		// const loading = await this.loadingController.create({
		// 	message: 'Loading'
		// });

		// await loading.present();
		// await this.api.getRecipe(this.id)
		// .subscribe(res => {
		// 	this.recipe = res.recipe
		// 	loading.dismiss();
		// }, err => {
		// 	console.log(err);
		// 	loading.dismiss();
		// });


		this.recipe = this.api.getRecipe(this.id).recipe

	}

	ngOnInit() {
		this.route.paramMap.subscribe((params : ParamMap)=> {
			this.id=params.get('id');
		});
		console.log("Current id: " + this.id);
		this.getRecipe(this.id);
	}
}