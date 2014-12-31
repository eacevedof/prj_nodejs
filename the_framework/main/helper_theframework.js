/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file theframework_helper.js
 * @version: 1.0.1
 * @name: TheFrameworkHelper
 * @date: 31-12-2014 09:48 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 *      TheFramework
 */

var TheFrameworkHelper = function()
{
    var _hprop1 = "";
    var _hprop2 = "";
    var _hprop3 = [];

    this.init = function(){;}

    //===========================
    //        SETTERS
    //===========================
    this.set_hprop1 = function(sValue){_hprop1 = sValue;}
    this.set_hprop2 = function(iValue){ _hprop2 = iValue;}
    this.set_hprop3 = function(arObjValues){_hprop3 = arObjValues;}

    //===========================
    //        GETTERS
    //===========================    
    this.get_hprop1 = function(){return _hprop1;}
    this.get_hprop2 = function(){return _hprop2;}
    this.get_hprop3 = function(){return _hprop3;}
    
}//TheFrameworkHelper

//Herencia
var oTheFramework = require("./the_framework");
TheFrameworkHelper.prototype = oTheFramework;

var oExport = new TheFrameworkHelper();
module.exports = oExport;