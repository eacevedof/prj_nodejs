/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index.js 
 * @version: 1.0.5
 * @name: 
 * @date: 27-12-2014 13:11 (SPAIN)
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

//Configuro la ip y el puerto de escucha del servidor node
oServer.set_ip(oConfig.get_ip());
oServer.set_port(oConfig.get_port());
oServer.init(oHttp,oUrl,oFs);

console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());
