var Config = function()
{
    var sIP = "127.0.0.1";
    var iPort = 4000;
    
    //GETS
    this.get_ip = function(){return sIP;}
    this.get_port = function(){return iPort;}
    
    //SETS
    this.set_ip = function(sValue){sIP = sValue;}
    this.set_port = function(iValue){iPort = iValue;}
}

var oConfig = new Config();
module.exports = oConfig;