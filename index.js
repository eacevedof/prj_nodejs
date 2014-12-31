/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index.js 
 * @version: 1.0.11
 * @name: 
 * @date: 31-12-2014 09:51 (SPAIN)
 * @observations: core library.
 *      Archivo principal. Equivalente a index.html
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */

//Variables globales
var _GET = null;
var _POST = null;

//IMPORTACIÓN DE MÓDULOS
//Main Node modules
var oHttp = require("http");
var oUrl = require("url");
//var oFs = require("fs");

//propios
global.oUtils = require("./the_framework/components/component_utils");
var oConfig = require("./the_framework/components/component_config");
var oServer = require("./the_framework/components/component_server");
var oHelperSelect = require("./the_framework/helpers/helper_select");
//var otf= require("./the_framework/main/the_framework");
var oMainHelper = require("./the_framework/main/theframework_helper");
var oMainView = require("./the_framework/main/theframework_view");

oUtils.bugobj(oMainView,"oMainView");
//Configuro mi objeto servidor
//Objetos iniciales
oServer.set_objhttp(oHttp);
//oServer.set_objurl(oUrl);
//oServer.set_objfs(oFs);
//datos de escucha
oServer.set_ip(oConfig.get_ip());
oServer.set_port(oConfig.get_port());

//Esto devuelve un objeto vacio {}
//oUtils.bug(this,"this principal");
//Función que lee parametros get
//Nota: esta función tiene acceso a oUrl que no es el atributo de oServer sino la variable de módulo definida
//en este archivo. De aqui deduzco que, como todo lo que hay dentro de set_oncreateserer tiene visibilidad sobre
//las variables de este archivo sus argumentos tambien los tienen. Por lo tanto fn_oncreateserver puede trabajar
//con oUrl. @TODO Habría que hacer una prueba empirica
function fn_oncreatesever(oRequest,oResponse)
{ 
    _GET = oUrl.parse(oRequest.url,true).query;
    oUtils.bugobj(_GET,"_GET");
    var sHtml = _GET.module +", "+ _GET.id+", "+ _GET.id_foreign;
    oResponse.writeHead(200, {"Content-Type":"text/html"});
    
    var arOptions = [{"key1":"value1"},{"key2":"value2"},{"key3":"value3"}];
    oHelperSelect.set_id("UnId");
    oHelperSelect.set_name("aName");
    oHelperSelect.set_options(arOptions);
    sHtml += oHelperSelect.get_html();
    oResponse.end(sHtml);
}

oServer.set_oncreateserver(fn_oncreatesever);
//inicializa el servidor
oServer.init();

console.log(":0) Your NODE server is running at: "+oServer.get_ip()+":"+oServer.get_port());
console.log("Using processid:"+process.pid);
