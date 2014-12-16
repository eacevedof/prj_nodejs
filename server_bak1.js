//IMPORTACIÓN DE MÓDULOS

var oHttp = require("http");
var oUrl = require("url");
var oUtils = require("./utils");
var oConfig = require("./config");



//oUtils.die(oConfig);

//var oConfig = {"sIP":"127.0.0.1","iPort":3000};
        
var fnOnrequest = function(oRequest,oResponse)
{
    var sMessage="";
    var sPathName = "";
    
    var sUrl = "http://www.example.com:1234/redirect?query=string#somehash";
    sPathName = oUrl.parse(sUrl).pathname;
    sMessage = "pathname:"+sPathName +", port:"+ oUrl.parse(sUrl).port+", hostname:"+oUrl.parse(sUrl).hostname;
    if(sPathName==="/redirect3")
    {        
        //oUtils.go_to(oResponse,"http://www.eduardoaf.com");
        oResponse.end(sPathName);
    }
    else
    {
        oResponse.writeHead(200,{"Content-Length": sMessage.length,"Content-Type":"text/plain"});
        oResponse.end("Hello World\n "+sMessage);
    }
};
//En cada petición
oHttp.createServer(fnOnrequest).listen(oConfig.get_port(),oConfig.get_ip());
console.log("processid:"+process.pid);
console.log("Server running at: "+oConfig.get_ip()+":"+oConfig.get_port());