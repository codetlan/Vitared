Aplicación desarrollada con Sencha Touch 2 y conexión via JSONP para Drupal.

Empaquetamiento

El empaquetamiento se realizo con PhoneGap que permite desarrollar aplicaciones
para dispositivos móviles utilizando herramientas genéricas tales como JavaScript, HTML5 y CSS3


1.- Instalar Node

$ npm install


2.- Instalar PhoneGap

$ npm install -g phonegap


3.- Bajar el SDK de android e instalarlo de la siguiente URL.

http://developer.android.com/sdk/index.html


4.- Ingresar el PATH correspondiente en

MAC OS
- $ export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools

Windows

- C:\Development\android-sdk-windows\platform-tools;C:\Development\android-sdk-windows\tools


5.- Actualizamos la versión d sencha

$ sencha app upgrade

6.- Se corre el proceso de empaquetación

$ sencha phonegap init com.codetlan.Vitared Vitared



El archivo de configuración donde editamos la versión que se requiere compilar es el archivo.

- phonegap.local.properties

# Editamos la linea para el empaquetamiento que requerimos, las opciones son:
# android
# blackberry
# ios
# wp7
# wp8

phonegap.platform=wp7






