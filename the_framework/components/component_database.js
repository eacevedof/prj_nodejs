/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_database.js 
 * @version: 1.0.0
 * @name: ComponentDatabase
 * @date: 05-04-2015 14:17 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */

var ComponentDatabase = function()
{
    var sConnString = "mongodb://nodeuser:NodePassword@ds041140.mongolab.com:41140/mgdb_nodejs";
    //hace crud sobre la bd
    var oMongoDb = require("mongodb").Db;
    //crea la conexión y onconnect se pide la coleccion
    var oMongoClient = require("mongodb").MongoClient;
    var oMongoServer = require("mongodb").Server;
    
    var _prop2 = "";
    var _prop3 = [];

    var on_connect = function(isError,oDb)
    {
        if(isError)
        {
            console.log("ERROR: conexión contra: "+sConnString);
        }
        //sin errores
        else
        {
            console.log("SUCCESS: conexión contra: "+sConnString+", realizada con exito!!!");
            var arData=oDb.collection("base_user").findOne();
            console.log(arData);
       }    
    }   
    
    var on_find = function()
    {
        
    }
    
    var on_open = function(isError,oDb)
    {
        console.log("on_open()");
        if(isError)
        {
            console.log("error on opening connection");
            return;
        }
        var oCollection = oDb.collection("base_user");
        var arData = oCollection.findOne({code:3});
        console.log(arData);
        
    }

    this.connect = function()
    {
        oMongoClient.connect(sConnString,on_connect)
    }
    
    this.connect2 = function()
    {
        var oServer = new oMongoServer("s041140.mongolab.com",41140)
        var oDb = new oMongoDb("mgdb_nodejs",oServer);
        oDb.open(on_open);
        //oMongoClient.connect(sConnString,on_connect)
    }
    
    this.init = function(){;}
    

    //===========================
    //        SETTERS
    //===========================
    this.set_prop1 = function(sValue){sConnString = sValue;}
    this.set_prop2 = function(oValue){ oMongoClient = oValue;}
    this.set_prop3 = function(arObjValues){_prop3 = arObjValues;}

    //===========================
    //        GETTERS
    //===========================    
    this.get_prop1 = function(){return sConnString;}
    this.get_prop2 = function(){return oMongoClient;}
    this.get_prop3 = function(){return _prop3;}

}//ComponentDatabase

var oExport = new ComponentDatabase();
module.exports = oExport;