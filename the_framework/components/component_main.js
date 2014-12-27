/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file component_main.js 
 * @version: 1.0.0
 * @name: ComponentMain
 * @date: 27-12-2014 20:27 (SPAIN)
 * @observations: core library.
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */

var ComponentMain = function()
{   
    /**
     * 
     * @param {type} oAnyObject
     * @returns {unresolved}
     */
    this.get_type = function(oAnyObject){return typeof oAnyObject;}//get_type

    //sType: http://www.crockford.com/javascript/remedial.html
    this.is_of_type = function(eHtml,sType)
    {
        var sElementType = this.get_type(eHtml);
        if(sType == sElementType)
            return true;
        return false;
    }//is_of_type

    this.is_object = function(oAnyObject){return this.is_of_type(oAnyObject,"object")}//is_object

    this.is_null = function (oAnyObject){return (oAnyObject === null);}//is_null

    //Indica si existe una propiedad en el objeto
    //oAnyProperty = oAnyObject.oProperty
    this.is_undefined = function(oAnyProperty){return (oAnyProperty==undefined);}//is_undefined
    
    this.is_string = function(sAnyString)
    {
        if(this.is_null(sAnyString))
            return false;
        return (this.get_type(sAnyString)=="string");
    }//is_string

    this.is_array = function(oAnyObject)
    {
        if(oAnyObject.length != undefined)
            return true;
        return false;
    }//is_array
    
    this.is_inarray = function(sItem,arSearch)
    {
        if(arSearch.indexOf(sItem)!=-1)
            return true;
        return false;
    }//is_inarray

    this.get_key_from_value = function(arValues, sValueToSearch)
    {
        var sTmpValue = null;
        var iNumItems = 0;
        if(this.is_array(arValues))
        {
            iNumItems = arValues.length;
            for(var iPosition=0; iPosition<iNumItems; iPosition++)
            {
                sTmpValue = arValues[iPosition];
                if(sTmpValue == sValueToSearch)
                    return iPosition;
            }
            //this.show_in_console("");
        }
        else
            console.log("ERROR: object "+arValues.toString()+" is not an array");
        return -1;
    }//get_key_from_value
    
}//ComponentMain

var oComponentMain = new ComponentMain();
module.exports = oComponentMain;