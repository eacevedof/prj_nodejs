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