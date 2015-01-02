/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file helper_raw.js 
 * @version: 1.0.0
 * @name: HelperRaw
 * @date: 01-01-2015 10:58 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var HelperRaw = function()
{
    var sRaw = "";

    this.init = function(){;}

    this.get_html = function()
    {
        var sHtmlToReturn = sRaw;
        return sHtmlToReturn;
    }

    //===========================
    //        SETTERS
    //===========================
    this.set_raw = function(sValue){sRaw = sValue;}

    //===========================
    //        GETTERS
    //===========================    
    this.get_raw = function(){return sRaw;}
    
}//HelperRaw

var oExport = new HelperRaw();
module.exports = oExport;