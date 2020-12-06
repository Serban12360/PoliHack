const express = require('express'); 
const path = require('path'); 
const app = express(); 
const formidable = require('formidable');
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'resources'))); 

app.engine('html', require('ejs').renderFile); 

app.set('view engine', 'html'); 
app.get('/', function(req, res){	
	res.render('html/Hub');

})
app.get('/tabla', function(req, res){	
	res.render('html/Paint');
})

app.get('/materiale', function(req, res){	
	res.render('html/bac');
})
app.get('/orar', function(req, res){	
	res.render('html/orar');
})
app.get('/recenzii', function(req, res){	
	res.render('html/Opinii');
})
app.get('/catalog', function(req, res){	
	res.render('html/catalog');

})
app.get('/login', function(req, res){	
	res.render('html/login');

})
app.get('/signup', function(req, res){	
	res.render('html/signup');

})
app.get('/catalog2', function(req, res){	
	console.log(req.query.id);
	res.render('html/catalog2');


})




app.get('/preia_id', function(req, res){
	let array = [];
	let username=req.query.username;
	let db = fs.readFileSync('db.json');
	let dbObject= JSON.parse(db);
	for(let i=0; i<dbObject.useri.length; i++){
		if(username == dbObject.useri[i].username){
			for(let j=0; j<dbObject.useri[i].cataloage.length; j++)
				array.push(dbObject.useri[i].cataloage[j].numeCatalog);
		}
	}
	res.send(JSON.stringify(array));
})



app.get('/preia_tabel', function(req, res){
	let tabel;
	let username=req.query.username;
	let id=req.query.id;
	let db = fs.readFileSync('db.json');
	let dbObject= JSON.parse(db);
	for(let i=0; i<dbObject.useri.length; i++){
		if(username == dbObject.useri[i].username){
			for(let j=0; j<dbObject.useri[i].cataloage.length; j++){
				if(dbObject.useri[i].cataloage[j].numeCatalog == id){
					tabel = dbObject.useri[i].cataloage[j].catalog;
					res.send(tabel);
				}
			}
		}	
	}
})




app.post('/date', function(req,res) {
	
	var form = new formidable.IncomingForm();
	
	form.parse(req, function(err,fields,files) {
		
		if(err) {				
			console.log(`Avem o eroare: ${err}`);
		}

		else { 

			let nume = fields.nume;
			let email = fields.email;
			let username = fields.username;
			let parola = fields.parola;
			let parolaConfirm = fields.parolaConfirm;
			
			if(parola == parolaConfirm){
				console.log('sunt aici')
				let db = fs.readFileSync('db.json');
				let dbObject = JSON.parse(db);
				let ok = true;
				for(var i=0; i<dbObject.useri.length; i++){
					if(dbObject.useri[i].username == username || dbObject.useri[i].email == email){
						ok = false;
						break;
					}
				}
				if(!ok) {res.send("Username sau email deja luate")}
				
				else {
						
					dbObject.useri.push({
						"email":email,
						"username":username,
						"nume":nume,
						"parola":parola,
						"cataloage":[]
					});
					
					let dbNew = JSON.stringify(dbObject);
					fs.writeFileSync('db.json',dbNew);
					res.send("OK");
				}
				
			}
			else {res.send('Parole incompatibile');}
		}
	})
	
})

app.post('/logare', function(req,res) {
	
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files) {
		if(err) { 				
			console.log(`Avem o eroare: ${err}`);
		}

		else { 

			let username = fields.username;
			let parola = fields.parola;
			
			
				console.log('sunt aici')
				let db = fs.readFileSync('db.json');
				let dbObject = JSON.parse(db);
				let ok = false;
				for(var i=0; i<dbObject.useri.length; i++){
					if(dbObject.useri[i].username == username && dbObject.useri[i].parola == parola){
						ok = true;
						break;
					}
				
				}
				if(!ok) {res.send("Username sau parola greista")}
				
				else res.send("OK")
				
			
		}
	})
	
})





app.post('/salveaza_catalog', function(req,res) {
	
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files) {
		if(err) { 				
			console.log(`Avem o eroare: ${err}`);
		}

		else {
			let id = fields.id;
			let username = fields.username;
			let catalog = fields.catalog;
			
			
			
				console.log('sunt aici')
				let db = fs.readFileSync('db.json');
				let dbObject = JSON.parse(db);
				let indice;
				for(let i=0; i<dbObject.useri.length; i++){
					if(dbObject.useri[i].username == username){
					indice=i;
					break;}
				}
				let exista=false;
				let indiceCatalog;
				for(let i=0; i<dbObject.useri[indice].cataloage.length; i++)
					if(id == dbObject.useri[indice].cataloage[i].numeCatalog){
						exista = true;
						indiceCatalog = i;
					}
				if(exista == false)
					dbObject.useri[indice].cataloage.push({"numeCatalog":id, "catalog":catalog});
				else dbObject.useri[indice].cataloage[indiceCatalog].catalog = catalog;

				let dbNew = JSON.stringify(dbObject);
				fs.writeFileSync('db.json',dbNew);
				res.send("ok");
		}
	})
	
})


app.listen(3000, function(){			
	console.log('serverul a inceput');
})