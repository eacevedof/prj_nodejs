/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file index.js 
 * @version: 1.0.2
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


var jnMimeType = {"js":"text/javascript","html":"text/html","css":"text/css","jpg":"image/jpg","gif":"image/gif","png":"image/png"};

oUtils.bug(oServer);
oServer.init(oHttp,oUrl,oFs)
oUtils.bug(oServer);

var serverHandler = function(oRequest,oResponse)
{
    var sPathName = (oUrl.parse(oRequest.url).pathname=="/")?"/index.html":oUrl.parse(oRequest.url).pathname;
    var sPathFile = "examples"+sPathName;
    
    oUtils.bug(sPathFile,"pathfile");
    var fn_filexists = function(isFile)
    {
        //si exise
        if(isFile)
        {
            oFs.readFile(sPathFile,fn_onfileread)
        }
        else
        {
            oResponse.writeHead(404,"text/plain");
            oResponse.end("Error 404. El enlace no existe o ha dejado de existir");
        }
    }

    var fn_onfileread = function(isError,sFileContent)
    {
        if(isError)
        {
            oResponse.writeHead(500,"text/plain");
            oResponse.end("Error interno.");
        }
        else
        {
            var sExtension = sPathFile.split(".").pop();
            var sFileMime = jnMimeType[sExtension];
            oResponse.writeHead(200,{"Content-Type":sFileMime});
            oResponse.end(sFileContent);
        }
    }
    
    oFs.exists(sPathFile,fn_filexists);
}
//oHttp.createServer(serverHandler).listen(4000,"127.0.0.1");
console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());


var fn_ongeterror = function(oError)
{
    oUtils.bug("There was an error: "+oError.message);
}

var fn_ongetresponse = function(oResponse)
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

var fn_onrequest = function(oRequest,oResponse)
{
    var sMessage = "this is a content!!";
    var oOptions = {host: "www.eduardoaf.com",port:"80",path:"/"};
    oHttp.get(oOptions,fn_ongetresponse).on("error",fn_ongeterror);
    
    //oUtils.bug(oRequest);
    oResponse.writeHead(200,{"Content-Type":"text/plain"});
    oResponse.end(sMessage);
};

//En cada petición
//oHttp.createServer(fn_onrequest).listen(oConfig.get_port(),oConfig.get_ip());

