/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file theframework_helper.js
 * @version: 1.0.0
 * @name: TheFrameworkView
 * @date: 31-12-2014 10:25 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 *      TheFramework
 */

var TheFrameworkView = function()
{
    var _vprop1 = "";
    var _vprop2 = "";
    var _vprop3 = [];

    this.init = function(){;}

    //===========================
    //        SETTERS
    //===========================
    this.set_vprop1 = function(sValue){_vprop1 = sValue;}
    this.set_vprop2 = function(iValue){ _vprop2 = iValue;}
    this.set_vprop3 = function(arObjValues){_vprop3 = arObjValues;}

    //===========================
    //        GETTERS
    //===========================    
    this.get_vprop1 = function(){return _vprop1;}
    this.get_vprop2 = function(){return _vprop2;}
    this.get_vprop3 = function(){return _vprop3;}
    
}//TheFrameworkView

//Herencia
var oTheFramework = require("./theframework");
TheFrameworkView.prototype = oTheFramework;

var oExport = new TheFrameworkView();
module.exports = oExport;