/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file helper_select.js 
 * @version: 1.0.1
 * @name: HelperSelect
 * @date: 30-12-2014 09:33 (SPAIN)
 * @observations: core library.
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var HelperSelect = function()
{
    var sPrefix = "sel";
    var sId = "";
    var sName = "";
    /** 
     * Los elementos key<i> formarán la propiedad option.value y los value formaran option.innerHTML
     * Array de objetos tipo [{key1:value1},{key2:value2},..{keyn:valuen}]
     * @type Array 
     */
    var arObjOptions = [];
    /**
     * Valores que se cargaran seleccionados
     * @type Array
     */
    var arSelected = [];

    this.init = function(){;}

    this.get_html = function()
    {
        var sHtmlToReturn = "";
        sHtmlToReturn += get_opentag();
        sHtmlToReturn += get_options();
        sHtmlToReturn += get_closetag();
        return sHtmlToReturn;
    }

    var build_option = function(sKey,sValue,isSelected)
    {
        var sHtmlToReturn = "<option";
        sHtmlToReturn += " value=\""+sKey+"\"";
        if(isSelected)sHtmlToReturn += " selected";
        sHtmlToReturn += ">";
        sHtmlToReturn += sValue;
        sHtmlToReturn += "</option>\n";
        return sHtmlToReturn;
    }

    var get_options = function()
    {
        var sHtmlToReturn = "";
        var iOptions = arObjOptions.length;
        //console.log(iOptions,"iOptions");
        oUtils.bug(arObjOptions,"arObjOptions");
        if(iOptions>0)
        {
            for(var iOption=0; iOption<iOptions; iOption++)
            {
                var oTmp = arObjOptions[iOption];
                for(var sProperty in oTmp)
                {
                    var sKey = sProperty;
                    var sValue = oTmp[sProperty];
                    //var doSelect = @TODO queda obtener los valores a cargar seleccionados
                    sHtmlToReturn += build_option(sKey,sValue,true);
                    //console.log(sHtmlToReturn);
                }//for sProperty
            }//for iOption
        }//if iOptions
        return sHtmlToReturn;
    }//get_options

    var get_opentag = function()
    {
        var sHtmlToReturn = "";
        sHtmlToReturn += "<select";
        if(sId!==""){sHtmlToReturn += " id=\""+sPrefix+sId+"\"";}
        if(sName!==""){sHtmlToReturn += " name=\""+sPrefix+sName+"\"";}
        sHtmlToReturn += ">";
        return sHtmlToReturn;
    }

    var get_closetag = function()
    {
        var sHtmlToReturn = "";
        sHtmlToReturn = "</select>";
        return sHtmlToReturn;
    }
    //===========================
    //        SETTERS
    //===========================
    this.set_id = function(sValue){sId = sValue;}
    this.set_name = function(iValue){sName = iValue;}
    this.set_options = function(arObjValues){arObjOptions = arObjValues;}
    this.set_value_to_select = function(mxValues){arSelected.push(mxValues);}
    //===========================
    //        GETTERS
    //===========================    
    this.get_id = function(){return sId;}
    this.get_name = function(){return sName;}    
}

var oExport = new HelperSelect();
module.exports = oExport;