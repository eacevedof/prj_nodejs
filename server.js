/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file server.js 
 * @version: 1.0.0
 * @name: 
 * @date: 16-12-2014 16:36 (SPAIN)
 * @observations: core library.
 * @requires:
 */

//IMPORTACIÓN DE MÓDULOS
//propios
var oUtils = require("./the_framework/utils");
var oConfig = require("./the_framework/config");
//Node
var oHttp = require("http");
var oUrl = require("url");
        
var fnOnGetError = function(oError)
{
    oUtils.bug("There was an error: "+oError.message);
}

var fnOnGetResponse = function(oResponse)
{
    if(oResponse.statusCode==200)
    {
        oUtils.bug("the site is up");
    }
    else
    {
        oUtils.bug("the site is down");
    }
}

var fnOnrequest = function(oRequest,oResponse)
{
    var sMessage = "this is a content!!";
    var oOptions = {host: "www.eduardoaf.com",port:"80",path:"/"};
    oHttp.get(oOptions,fnOnGetResponse).on("error",fnOnGetError);
    
    //oUtils.bug(oRequest);
    oResponse.writeHead(200,{"Content-Type":"text/plain"});
    oResponse.end(sMessage);
};
//En cada petición
oHttp.createServer(fnOnrequest).listen(oConfig.get_port(),oConfig.get_ip());
console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());