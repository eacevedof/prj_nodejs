/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index.js 
 * @version: 1.0.3
 * @name: 
 * @date: 22-12-2014 16:45 (SPAIN)
 * @observations: core library.
 * @requires:
 */

//IMPORTACIÓN DE MÓDULOS
//Main Node modules
var oHttp = require("http");
var oUrl = require("url");
var oFs = require("fs")

//propios
var oUtils = require("./the_framework/components/component_utils");
var oConfig = require("./the_framework/components/component_config");
var oServer = require("./the_framework/components/component_server");

oServer.init(oHttp,oUrl,oFs);

console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());
