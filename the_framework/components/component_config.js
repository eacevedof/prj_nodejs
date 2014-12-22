/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_config.js 
 * @version: 1.0.1
 * @name: 
 * @date: 16-12-2014 16:36 (SPAIN)
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
module.exports = oConfig;