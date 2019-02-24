# CursoRed
1- iniciar un proyecto con node JS 
	comando en la carpeta del proyecto : npm init.
	pregunta: nombre del proyecto, autor, package.
2- instalando Dependencias
	PACKAGES:
	- Express: es un framework que nos permite trabajar con rutas, Peticiones http,
		  nos permite trabajar acciones, controladores, todo con las rutas http.
		  / npm install express --save / el comando --save permite guardarlo como dependencia dentro del proyecto

	- bcrypt-nodejs: nos permite encriptar contraseñas / npm install bcrypt-nodejs --save /
	
	- body-parser: nos permite comvertir los JSON que llegan al api en formato string y este a un objeto de javascript
		       totalmente usable por parte de javascript. este es un parseador que permite comvertir json.	
		       / npm install body-parser --save /
	
	- connect-multiparty: permite hacer subidas de ficheros como imagenes documentos etc.
			      / npm install connect-multiparty --save /

	- mongoose: es un rm para trabajar fluidamente con MongooseDB tiene metodos clases con las que podemos hacer peticiones
		     conectarnos a la BD Mongoose / npm install mongoose --save /
	
	- jwt-simple: nos permite trabajar con Tokens gestionar token, comprobar, crear.
		      / npm install jwt-simple --save /

	- moment: permite trabajar con fechas, generar fechas y momentos del timepo.  
			/ npm install moment --save /

	- nodemon: este monitorea el codigo para que cada vez que se haga un cambio este baje y suba el servidor de maneral
		   automatica para ejecutarlo solo en la 'Rama develop' se debe instalar con el comando "--save-dev" esto le indica
		   a node que este solo va a estar en local y no en produccion.
			/ npm install moment --save-dev /

