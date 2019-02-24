# CursoRed :bowtie:

	** * iniciar un proyecto con node JS** 
	  comando en la carpeta del proyecto : **/ *npm init.* /**
	  pregunta: nombre del proyecto, autor, package.

##  instalando Dependencias

	**1. Express:** es un framework que nos permite trabajar con rutas, Peticiones http,
		  nos permite trabajar acciones, controladores, todo con las rutas http.
		  **/ *npm install express --save* /** el comando --save permite guardarlo como dependencia dentro del proyecto

	**2. Bcrypt-nodejs:** nos permite encriptar contraseñas **/ *npm install bcrypt-nodejs --save* /**
	
	**3. Body-parser:** nos permite comvertir los JSON que llegan al api en formato string y este a un 	  					objeto de javascript totalmente usable por javascript. este es un parseador que                        permite comvertir json.	
		          **/ *npm install body-parser --save* /**
	
	**4. Connect-multiparty:** permite hacer subidas de ficheros como imagenes documentos etc.
			              **/ *npm install connect-multiparty --save* /**

	**5. Mongoose:** es un rm para trabajar fluidamente con MongooseDB tiene metodos clases con las que                     podemos hacer peticiones. conectarnos a la BD Mongoose 
	                 **/ *npm install mongoose --save* /**
	
	**6. Jwt-simple:** nos permite trabajar con Tokens gestionar token, comprobar, crear.
		          **/ *npm install jwt-simple --save* /**

	**7. Moment:** permite trabajar con fechas, generar fechas y momentos del timepo.  
			**/ *npm install moment --save* /**

	**8. Nodemon:** este monitorea el codigo para que cada vez que se haga un cambio este baje y suba el 				servidor de maneral automatica para ejecutarlo solo en la 'Rama develop' se debe                       instalar con el comando *--save-dev* esto le indica a node que este solo va a estar en                 local y no en produccion.
					**/ *npm install moment --save-dev* /**  
				*Para que nodemon quede de manera automatica se crea el script en el **package.json** en 
				"escript" anexamos la etiquera "start" con el parametro * nodemon ./index.js * donde index u otro archivo es el que se va a ejecutar automaticamente. para esto en la consola pasamos el comando 'npm start'* 
			


