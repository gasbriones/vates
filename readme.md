#ubuntu
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

#Windows y mac

https://nodejs.org/en/download/


#NPM (node package manager) es el gestor de paquetes javascript de NODE.JS por excelencia. 
#Gracias a él, tenemos casi cualquier librería disponible a tan solo una linea de comando de distancia, permitiéndonos utilizarla en cuestión de segundos.
#NPM utiliza el archivo package.json para almacenar todos los datos relevantes a nuestra aplicación. Así que lo primero que tenemos que hacer es iniciar con el comando:

* npm init

#Los comandos mas utilizados son:

* npm search [nombreDelPaquete]
* npm install [nombreDelPaquete]

#Con la opción -g o --global se le está indicando a npm que debe instalar el paquete de manera Global, esto quiere decir que se va a poder utilizar desde cualquier directorio.

* npm install -g [nombreDelPaquete]

#Para agregar un paquete como dependencia de desarrollo:

* npm install [nombreDelPaquete] --save --dev

#Para agregar un paquete como dependencia:

* npm install [nombreDelPaquete] --save

######################## React ######################

#React es una biblioteca JavaScript declarativa, eficiente y flexible para crear interfaces de usuario.
#fue desarrolada por Facebook y es mantenida por los mismos + instagram

#### JSX ####
#Para hacernos la vida mucho más facil, ReactJS nos ofrece un pseudolenguaje llamado JSX que facilita el desarrollo de aplicaciones web con su sintaxis para crear elementos en el DOM.