//IMPORTACIÓN DE MÓDULOS
//propios
var oUtils = require("./the_framework/utils");
var oConfig = require("./the_framework/config");
//Node
var oHttp = require("http");
var oUrl = require("url");
        
var fnOnrequest = function(oRequest,oResponse)
{
    var sMessage = "this is a content!!";
    oUtils.bug(oRequest);
    oResponse.writeHead(200,{"Content-Type":"text/plain"});
    oResponse.end(sMessage);
};
//En cada petición
oHttp.createServer(fnOnrequest).listen(oConfig.get_port(),oConfig.get_ip());
console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());