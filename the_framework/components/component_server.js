/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_server.js 
 * @version: 1.0.2
 * @name: ComponentServer
 * @date: 24-12-2014 08:55 (SPAIN)
 * @observations: core library.
 * @requires:
 */

var ComponentServer = function()
{
    //Demo url llamada: http://127.0.0.1:4000/txtfileread.txt
    var jnMimeType = {"js":"text/javascript","html":"text/html","css":"text/css","jpg":"image/jpg","gif":"image/gif","png":"image/png"};
    
    //Funcion principal que lee el archivo. Tiene dos funciones que llaman al callback
    //(callback) fn_resphandler((iReqError,sFileContent)) Trata los posibles errores de lectura y envia un mensaje por pantalla
    var fn_readfile = function(oFs,sPathFile,fn_resphandler)
    {
        //Los argumentos de esta funcion los genera oFs.readFile
        var fn_onreadfile = function(isError,sFileContent)
        {
            if(isError)
            {
                //Escribe en pantalla error interno en el servidor
                fn_resphandler(500,null);
            }
            else
            {
                //Muestra en pantalla el contenido del archivo
                fn_resphandler(200,sFileContent);
            }
        }//fn_onfileread
        
        var fn_onexists = function(isFile)
        {            
            //si existe
            if(isFile)
            {
                oFs.readFile(sPathFile,fn_onreadfile);                
            }
            else
            {
                //Escribe en pantalla página no encontrada
                fn_resphandler(404,null);
            }
        }//fn_fileexists

        //exists crea el flag isFile que lo usa en fn_onexists
        //fn_onexists llama a readFile y onreadfile o a fn_responsehandler
        //si usa onreadfile llama a fn_responsehandler para tratar los casos 200 y 500
        //si no existe el archivo llama a fn_responsehandler para tratar el caso 404 página no encontrada
        oFs.exists(sPathFile,fn_onexists);
    }//fn_readfile()
    
    var get_pathfile = function(oRequest,oUrl)
    {
        var sPathName = (oUrl.parse(oRequest.url).pathname=="/")?"/index.html":oUrl.parse(oRequest.url).pathname;
        var sPathFile = "examples"+sPathName;
        return sPathFile;
    }//get_pathfile()
    
    //Los argumentos de esta función se pasan desde index.js
    this.init = function(oHttp,oUrl,oFs)
    {
        var fn_oncreateserver = function(oRequest,oResponse)
        {
            var sPathFile = get_pathfile(oRequest,oUrl); 
            //funcion callback
            //Esta funcion se llamará despues de comprobar la existencia del archivo en la ruta proporcionada
            //los argumentos se generan manualmente en las funciones internas de fn_readfile
            var fn_responsehandler = function(iReqError,sFileContent)
            {
                if(iReqError===404)
                {
                    oResponse.writeHead(iReqError,"text/plain");
                    oResponse.end("Error 404.  El enlace no existe o ha dejado de existir");
                }
                else if(iReqError===500)
                {
                    oResponse.writeHead(iReqError,"text/plain");
                    oResponse.end("Error interno.");
                }
                else
                {
                    var sFileExt = sPathFile.split(".").pop();
                    var sMimeType = jnMimeType[sFileExt];
                    oResponse.writeHead(iReqError,{"Content-Type":sMimeType});
                    oResponse.end(sFileContent);
                }
            }//fn_responsehandler
            
            fn_readfile(oFs,sPathFile,fn_responsehandler);
        }//fn_oncreateserver
        
        oHttp.createServer(fn_oncreateserver).listen(4000,"127.0.0.1");
    }//init()
    
}//ComponentServer

module.exports = new ComponentServer();