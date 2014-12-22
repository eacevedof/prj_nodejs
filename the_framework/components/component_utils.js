/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_utils.js 
 * @version: 1.0.2
 * @name: ComponentUtils
 * @date: 19-12-2014 15:46 (SPAIN)
 * @observations: core library.
 * @requires:
 */
var ComponentUtils = 
{
    go_to : function(oResponse,sUrl)
    {
        oResponse.writeHead(301,{"Location":sUrl});
        oResponse.end();
    },
    
    bug : function(mxVar,sTitle,isDie)
    {
        if(sTitle) console.log(sTitle);
        console.log(mxVar)
        if(isDie)
            process.exit(1);
        //process.kill(pid, 0) 
    }
};

module.exports = ComponentUtils;