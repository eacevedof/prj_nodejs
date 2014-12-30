/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file class_template.js 
 * @version: 1.0.0
 * @name: Template
 * @date: 27-12-2014 15:02 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var Template = function()
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

var oExport = new Template();
module.exports = oExport;