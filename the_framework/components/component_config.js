/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_config.js 
 * @version: 1.0.2
 * @name: 
 * @date: 27-12-2014 13:28 (SPAIN)
 * @observations: core library.
 * @requires:
 */
var ComponentConfig = function()
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

var oConfig = new ComponentConfig();
//oConfig.set_port(1234); esto funciona ;)
module.exports = oConfig;