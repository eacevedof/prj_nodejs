/**
 * @author Eduardo Acevedo Farje.
 * @link: www.eduardoaf.com
 * @file theapplication_page_head.js 
 * @version: 1.0.0
 * @name: TheApplicationPageHead
 * @date: 01-01-2015 10:37 (SPAIN)
 * @observations: 
 * @repo: https://github.com/eacevedof/prj_nodejs/
 * @requires:
 */
var TheApplicationPageHead = function()
{
    var arMetas = [];//array {"key1":"value","htmlcomment"} htmlcomment indica que se ha de crear ese meta como mentario
    var arLinks = [];
    var arScripts = [];

    this.init = function(){;}

    var build_metas = function()
    {
        var sHtmlToReturn = "";
        return sHtmlToReturn;
    }

    var build_links = function()
    {
        var sHtmlToReturn = "";
        return sHtmlToReturn;        
    }
    
    var build_scripts = function()
    {
        var sHtmlToReturn = "";
        return sHtmlToReturn;        
    }
    

    this.get_html = function()
    {
        var sHtmlToReturn = "<head>\n";
        sHtmlToReturn += "<!-- page_head @version: 1.0.0 -->\n";
        sHtmlToReturn += "<meta charset=\"utf-8\">\n";
        sHtmlToReturn += "<title> THE APPLICATION PAGE HEAD></title>\n";
        sHtmlToReturn += "<meta name=\"description\" content=\"\">\n";
        sHtmlToReturn += "<meta name=\"author\" content=\"Eduardo A. F. | www.eduardoaf.com\">\n";
        sHtmlToReturn += "<meta name=\"robots\" content=\"index, follow\">\n";
        sHtmlToReturn += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
        sHtmlToReturn += "<!-- jQuery Visualize Styles -->\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/huraga/plugins/jquery.visualize.css\">\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/jquery/ui/jquery-ui.css\"/>\n";
        sHtmlToReturn += "<!-- jQuery jGrowl Styles -->\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/huraga/plugins/jquery.jgrowl.css\">\n";
        sHtmlToReturn += "<!-- CSS styles -->\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/huraga/huraga-red.css\">\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/custom/huraga_override.css\">\n";
        sHtmlToReturn += "<!-- en iis añadir el tipo mime: text/css con extension.less -->\n";
        sHtmlToReturn += "<!--<link rel=\"stylesheet/less\" type=\"text/less\" href=\"style/custom/less_huraga_override.less\">-->\n";
        sHtmlToReturn += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/style/custom/app.css\">\n";
        sHtmlToReturn += "<!-- Fav and touch icons -->\n";
        sHtmlToReturn += "<link rel=\"shortcut icon\" href=\"/images/huraga/icons/favicon.ico\">\n";
        sHtmlToReturn += "<link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"/images/huraga/icons/apple-touch-icon-114-precomposed.png\">\n";
        sHtmlToReturn += "<link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"/images/huraga/icons/apple-touch-icon-72-precomposed.png\">\n";
        sHtmlToReturn += "<link rel=\"apple-touch-icon-precomposed\" href=\"/images/huraga/icons/apple-touch-icon-57-precomposed.png\">\n";
        sHtmlToReturn += "<!-- JS Libs -->\n";
        sHtmlToReturn += "<script src=\"/js/the_framework/cssless/cssless_1.3.3.js\" type=\"text/javascript\"></script>\n";
        sHtmlToReturn += "<!--<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js\"></script>-->\n";
        sHtmlToReturn += "<script href=\"/js/jquery/js_jquery_v1.10.2.js\"></script>\n";
        sHtmlToReturn += "<script href=\"/js/jquery/ui/jquery_ui_v1.10.3.custom.min.js\"></script>\n";
        sHtmlToReturn += "<script href=\"/js/jquery/ui/jquery.ui.datepicker-es.js\"></script>\n";
        sHtmlToReturn += "<script type=\"text/javascript\">window.jQuery || document.write(\"<script src=\"./js/huraga/libs/jquery.js\"><\/script>\";\");</script>\n";
        sHtmlToReturn += "<script href=\"/js/huraga/libs/modernizr.js\"></script>\n";
        sHtmlToReturn += "<script href=\"/js/huraga/libs/selectivizr.js\"></script>\n";
        sHtmlToReturn += "<script href=\"/js/huraga/bootstrap/bootstrap-tooltip.js\" type=\"text/javascript\"></script>\n";
        sHtmlToReturn += "<script href=\"/js/huraga/bootstrap/bootstrap-alert.js\" type=\"text/javascript\"></script>\n";
        
                var sHtmlToReturn = "";

        
        sHtmlToReturn += "</head>";
        return sHtmlToReturn;
    }//get_html

    //===========================
    //        SETTERS
    //===========================
    this.add_meta = function(jnValue){arMetas.push(jnValue);}
    this.set_metas = function(arValue){arMetas = arValue;}
    
    this.add_link = function(jnValue){arLinks.push(jnValue);}
    this.set_links = function(arValue){arLinks = arValue;}
    
    this.add_script = function(jnValue){arScripts.push(jnValue);}
    this.set_scripts = function(arValue){arScripts = arValue;}    
    
    //===========================
    //        GETTERS
    //===========================    
    
}//TheApplicationPageHead

var oExport = new TheApplicationPageHead();
module.exports = oExport;