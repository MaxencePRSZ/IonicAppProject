const express = require('express');

const app = express();
const APIRoutes = require('./api/routes/');
const TodoRoutes = require('./todo/routes');

//Le parser est nécessaire (cela fait partie des aberrations) car par défaut le serveur Node n'accepte pas les données du client, il faut donc un middleware (body-parser) pour ça. 
//On l'oublie => que des None pour les valeurs
//Pour les données de formulaire, IL FAUT LE METTRE AVANT LE APP.USE
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ( {
	extended : true
}));

app.use(bodyParser.json());

app.use(APIRoutes);
app.use(TodoRoutes);


app.listen(3000);
console.log("waiting on localhost:3000");


const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/todo';
mongoose.connect(database,(err)=> {
	if (err)
		throw err;
	console.log('Connect to the database');
});


const path = require('path');
let dirViews = [path.join(__dirname,'todo/views')];
app.set('views',dirViews);
app.set('view engine','ejs');