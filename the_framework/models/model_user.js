var ModelUser = function(id,name)
{
    var _id = id;
    var _name = name;
    
    this.set_id = function(iValue){ this._id = iValue;}
    this.set_name = function(sValue){this._name = sValue;}
    
    this.get_id = function(){ return this._id;}
    this.get_name = function(){ return this._name;}
}

module.exports = ModelUser;