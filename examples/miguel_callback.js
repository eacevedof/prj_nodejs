var findMyDocs = function(db,fnCallback)
{
    db.collection('population').find({}).toArray
    (
        function(err,docs) 
        {
            fnCallback(docs);
        }
    );
}
            
findMyDocs
(   
    db, 
    function(docs) 
    {
        res.send(docs);
    }
);
            
    