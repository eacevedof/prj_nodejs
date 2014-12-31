/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file the_framework.js 
 * @version: 1.0.0
 * @name: TheFramework
 * @date: 31-12-2014 08:53 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var TheFramework = function()
{
    var _prop1 = "";
    var _prop2 = "";
    var _prop3 = [];

    this.init = function(){;}

    //===========================
    //        SETTERS
    //===========================
    this.set_prop1 = function(sValue){_prop1 = sValue;}
    this.set_prop2 = function(iValue){ _prop2 = iValue;}
    this.set_prop3 = function(arObjValues){_prop3 = arObjValues;}

    //===========================
    //        GETTERS
    //===========================    
    this.get_prop1 = function(){return _prop1;}
    this.get_prop2 = function(){return _prop2;}
    this.get_prop3 = function(){return _prop3;}
    
}//TheFramework

var oExport = new TheFramework();
module.exports = oExport;