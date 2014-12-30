/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file model_user.js 
 * @version: 1.0.1
 * @name: ModelUser
 * @date: 16-12-2014 16:52 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */

var ModelUser = function(id,name)
{
    var _id = id;
    var _name = name;
    
    this.set_id = function(iValue){ this._id = iValue;}
    this.set_name = function(sValue){this._name = sValue;}
    
    this.get_id = function(){ return this._id;}
    this.get_name = function(){ return this._name;}
}//ModelUser

oExport = new ModelUser();
module.exports = oExport;