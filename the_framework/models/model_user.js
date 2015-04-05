/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file model_user.js 
 * @version: 1.0.2
 * @name: ModelUser
 * @date: 05-04-2015 13:09 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var ModelUser = function(id,name)
{
    var _id = id;
    var _name = name;
    var oDatabase = null;
    
    this.set_id = function(iValue){ _id = iValue;}
    this.set_name = function(sValue){_name = sValue;}
    this.set_database = function(oValue){oDatabase = oValue;}
    
    this.get_id = function(){ return _id;}
    this.get_name = function(){ return _name;}
    
    this.init = function()
    {
        console.log("in init");
        console.log(oDatabase);
        oUtils.bugobj(oDatabase,"DEBUG: oDatabase");    
        
    }
    
    
}//ModelUser

var oExport = new ModelUser();
module.exports = oExport;