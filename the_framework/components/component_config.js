/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_config.js 
 * @version: 1.0.3
 * @name: ComponentConfig
 * @date: 30-12-2014 09:17 (SPAIN)
 * @observations: core library.
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var ComponentConfig = function()
{
    var sIP = "127.0.0.1";
    var iPort = 4000;
    
    sIP = process.env.IP;
    iPort = process.env.PORT;
    //GETS
    this.get_ip = function(){return sIP;}
    this.get_port = function(){return iPort;}
    
    //SETS
    this.set_ip = function(sValue){sIP = sValue;}
    this.set_port = function(iValue){iPort = iValue;}
}//ComponentConfig

var oExport = new ComponentConfig();
//oConfig.set_port(1234); esto funciona ;)
module.exports = oExport;