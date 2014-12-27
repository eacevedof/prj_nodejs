/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index.js 
 * @version: 1.0.8
 * @name: 
 * @date: 27-12-2014 14:22 (SPAIN)
 * @observations: core library.
 *      Archivo principal. Equivalente a index.html
 * @requires:
 */

//IMPORTACIÓN DE MÓDULOS
//Main Node modules
var oHttp = require("http");
var oUrl = require("url");
var oFs = require("fs");

//propios
var oUtils = require("./the_framework/components/component_utils");
var oConfig = require("./the_framework/components/component_config");
var oServer = require("./the_framework/components/component_server");

//Configuro mi objeto servidor
//Objetos iniciales
oServer.set_objhttp(oHttp);
oServer.set_objurl(oUrl);
oServer.set_objfs(oFs);
//datos de escucha
oServer.set_ip(oConfig.get_ip());
oServer.set_port(oConfig.get_port());

//Función que lee parametros get
//Nota: esta función tiene acceso a oUrl que no es el atributo de oServer sino la variable de módulo definida
//en este archivo. De aqui deduzco que, como todo lo que hay dentro de set_oncreateserer tiene visibilidad sobre
//las variables de este archivo sus argumentos tambien los tienen. Por lo tanto fn_oncreateserver puede trabajar
//con oUrl. @TODO Habría que hacer una prueba empirica
function fn_oncreatesever(oRequest,oResponse)
{ 
    //con true: {module:'accounts'}
    var jnParams = oUrl.parse(oRequest.url,true).query;
    //con false: oQuery es module=accounts
    oUtils.bug(jnParams,"oQuery");
  
    var sModule = jnParams.module;
    oResponse.writeHead(200, {"Content-Type":"text/html"});
    oResponse.end(sModule);
}

oServer.set_oncreateserver(fn_oncreatesever);
//inicializa el servidor
oServer.init();

console.log(":0) Your NODE server is running at: "+oConfig.get_ip()+":"+oConfig.get_port());
console.log("Using processid:"+process.pid);
