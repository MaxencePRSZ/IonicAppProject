//Ce fichier contient le schéma des todo


const mongoose = require('mongoose');
const Schema = mongoose.Schema; //majuscule car instance d'un objet (tester si ça marche avec une minuscule)
const TodoSchema = new Schema (
{
	title : String,
	description : String,
	done : {
		type : Boolean,
		default : false
	},
	createdAt : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Todo',TodoSchema);