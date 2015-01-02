/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file theapplication_page.js 
 * @version: 1.0.0
 * @name: TheApplicationPage
 * @date: 01-01-2015 10:37 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var TheApplicationPage = function()
{
    var oHead = null;
    var oBody = null;

    this.init = function(){;}

    this.get_html = function()
    {
        var sHtmlToReturn = "";
        sHtmlToReturn += "<!DOCTYPE html>\n";
        sHtmlToReturn += "<!--[if IE 8]><html class=\"no-js ie8 ie\" lang=\"en\"><![endif]-->\n";
        sHtmlToReturn += "<!--[if IE 9]><html class=\"no-js ie9 ie\" lang=\"en\"><![endif]-->\n";
        sHtmlToReturn += "<!--[if gt IE 9]><!-->\n";
        sHtmlToReturn += "<html class=\"no-js\" lang=\"en\"> <!--<![endif]-->\n";
        
        if(oHead!=null)sHtmlToReturn += oHead.get_html();
        if(oBody!=null)sHtmlToReturn += oBody.get_html();
        
        sHtmlToReturn += "</html>";
        return sHtmlToReturn;
    }//get_html

    //===========================
    //        SETTERS
    //===========================
    this.set_head = function(oValue){oHead = oValue;}
    this.set_body = function(oValue){oBody = oValue;}
    
    //===========================
    //        GETTERS
    //===========================    
    this.get_head = function(){return oHead;}
    this.get_body = function(){return oBody;}
    
}//TheApplicationPage

var oExport = new TheApplicationPage();
module.exports = oExport;