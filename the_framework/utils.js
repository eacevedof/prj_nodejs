/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file utils.js 
 * @version: 1.0.0
 * @name: Utils
 * @date: 16-12-2014 16:36 (SPAIN)
 * @observations: core library.
 * @requires:
 */
var Utils = 
{
    go_to : function(oResponse,sUrl)
    {
        oResponse.writeHead(301,{"Location":sUrl});
        oResponse.end();
    },
    
    bug : function(mxVar,isDie)
    {
        console.log(mxVar)
        if(isDie)
            process.exit(1);
        //process.kill(pid, 0) 
    }     
};

module.exports = Utils;