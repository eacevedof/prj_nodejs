/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_server.js 
 * @version: 1.0.0
 * @name: ComponentServer
 * @date: 19-12-2014 15:50 (SPAIN)
 * @observations: core library.
 * @requires:
 */

function ComponentServer()
{
    //Demo url llamada: http://127.0.0.1:4000/txtfileread.txt
    var jnMimeType = {"js":"text/javascript","html":"text/html","css":"text/css","jpg":"image/jpg","gif":"image/gif","png":"image/png"};
        
    var get_pathfile = function(oRequest,oUrl)
    {
        var sPathName = (oUrl.parse(oRequest.url).pathname=="/")?"/index.html":oUrl.parse(oRequest.url).pathname;
        var sPathFile = "examples"+sPathName;
        return sPathFile;
    }//get_pathfile
    
    //Funcion principal que lee el archivo. Tiene dos funciones que llaman al callback
    //fn_callback: fn_readoncreate Trata los codigos de error del servidor si no hay envia el contenido del archivo por pantalla
    var fn_readfile = function(oFs,sPathFile,fn_callback)
    {
        //esta habria que meterla en la anterior
        var fn_onfileread = function(isError,sFileContent)
        {
            if(isError)
            {
                fn_callback(500,null);
            }
            else
            {
                fn_callback(200,sFileContent);
            }
        }//fn_onfileread
        
        var fn_fileexists = function(isFile)
        {            
            //si existe
            if(isFile)
            {
                oFs.readFile(sPathFile,fn_onfileread);                
            }
            else
            {
                fn_callback(404,null);
            }
        }//fn_fileexists

        oFs.exists(sPathFile,fn_fileexists);
    }//fn_readfile()
    
    this.init = function(oHttp,oUrl,oFs)
    {
        var fn_oncreateserver = function(oRequest,oResponse)
        {
            var sPathFile = get_pathfile(oRequest,oUrl); 
            //funcion callback
            var fn_readoncreate = function(iReqError,sFileContent)
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
            }//fn_onfileread
            
            fn_readfile(oFs,sPathFile,fn_readoncreate);
        }//fn_oncreate
        
        oHttp.createServer(fn_oncreateserver).listen(4000,"127.0.0.1");
    }//init()
    
}//ComponentServer

module.exports = new ComponentServer();