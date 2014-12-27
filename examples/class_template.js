/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_utils.js 
 * @version: 1.0.0
 * @name: HelperSelect
 * @date: 27-12-2014 15:02 (SPAIN)
 * @observations: core library.
 * @requires:
 */
var HelperSelect = function()
{
    var sId = "";
    var sName = "";
    var arObjOptions = [];

    this.init = function(){;}


    //===========================
    //        SETTERS
    //===========================
    this.set_id = function(sValue){sId = sValue;}
    this.set_name = function(iValue){sName = iValue;}
    this.set_options = function(arObjValues){arObjOptions = arObjValues}

    //===========================
    //        GETTERS
    //===========================    
    this.get_id = function(){return sId;}
    this.get_name = function(){return iPort;}    
}

var oHelper = new HelperSelect();
module.exports = oHelper;