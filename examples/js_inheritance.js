console.clear();
function bug(variable,title){if(title) console.log("title>:"+title); console.log(variable);}

//CLASE PADRE
var ClassParent = function(a,b,prv,me)
{
    //Atributos privados -> private $_priv
    var _priv = prv || "_prv";
    //Atributos publicos -> public $_ap ...
    //Importante. Es una buena práctica inicializar los atributos con this con algún valor por defecto primitivo.
    //por dos motivos. 1 crea la existencia del atributo y evita que this.<atributo> devuelva undefined y porque le estamos indicando
    //a la variable que tipo primitivo deberá almacenar "" string, 2 entero, {} object, ...
    this._me = me || "_me";
    this._ap = a || null;
    this._bp = b || "_bp";
    
    this.fn_get_priv = function(){return _priv;};
    this.fn_get_a = function(){return this._ap;};
    
    this.fn_set_priv = function(val){_priv=val;};
    this.fn_set_a = function(val){this._ap = val;};
};

//http://robertnyman.com/2008/10/14/javascript-how-to-get-private-privileged-public-and-static-members-properties-and-methods/
//Atributo estatico a compartir por todos los hijos
ClassParent._static = 0; // Class::_static;

var oParent = new ClassParent();
bug(oParent,"oParent");
/*
 _ap    null
_bp     "_bp"
_me     "_me"
fn_get_a    function()
fn_get_priv function()
fn_set_a    function(val)
fn_set_priv function(val)
*/
bug(oParent.fn_get_a(),"oParent.fn_get_a()"); //null

//CLASE HIJA
var ClassChild = function(ap,bp,privp,mep,ac,bc)
{
    this._ac = ac;
    this._bc = bc;
    //Constructor del padre equivale a __parent::constructor(...)
    //esto es equivalente a ClassParent(ap,bp,privp); "this" es la instancia del objeto creado 
    //hace referencia a ClassParent que es el objeto (función) y solo se ejecutará al construir el objetos
    ClassParent.call(this,ap,bp,privp,mep);
    ClassParent._static++;
};
//En php sería algo como: class ClassChild extends ClassParent{}
ClassChild.prototype = new ClassParent();
//Nuevo atributo en tiempo de ejecución. En php podría ser algo como $oObject->_cc
ClassChild.prototype._cc = "scc";

//====================================
//UTILIZANDO LAS CLASES CONFIGURADAS
//====================================
//Construyo los objetos con "new". Si no usaramos new solo estariamos ejecutando la función
//var oChildA = ClassChild("p","q",null,"oA"); daría error de compilacion.
//var oChildA = ClassChild; var oChildB = ClassChild; daría error porque solo se está haciendo copia por referencia de ClassChild, que es una función

var oChildA = new ClassChild("p","q",null,"oA");
var oChildB = new ClassChild("r","s","bpriv","oB");
bug(ClassParent._static,"ClassParent._static");

bug(oChildA,"oChildA");
bug(oChildB,"oChildB");

bug(oChildA.fn_get_priv(),"oChildA.fn_get_priv() antes asignar");//oChildA->fn_get_priv();
bug(oChildB.fn_get_priv(),"oChildB.fn_get_priv()");//oChildB->fn_getpriv();
oChildA.fn_set_priv("newpriv");
bug(oChildA._priv,"oChildA._priv despues de reasignar priv");//undefined ya que este atributo es privado
bug(oChildA.fn_get_priv(),"oChildA.fn_get_priv() despues de reasignar priv");//newpriv

bug(oChildA.fn_get_a(),"oChildA.fn_get_a()");//p
oChildA.fn_set_a("newa");
bug(oChildA._ap,"oChildA._ap despues de fn_set_a");//newa
bug(oChildA._bp,"oChildA._bp");//q
//__proto__ es lo que se ha creado en la instancia desde la plantilla
bug(oChildA.__proto__._cc,"oChildA.__proto__._cc");//scc
bug(oChildA["_cc"],"oChildA['_cc']");//scc
bug(oChildA._cc,"oChildA._cc");//scc
