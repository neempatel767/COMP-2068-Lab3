const data = [{
    UniqID : 0,
    Name : 'Mark',
    age : 12,
    height : 5.5
},
{
    UniqID : 1,
    Name : 'Stuart',
    age : 11,
    height : 5.0
},
{
    UniqID : 2,
    Name : 'Zack',
    age : 44,
    height : 5.6

},
{
    UniqID : 3,
    Name : 'Danial',
    age : 33,
    height : 4.8
}];


exports.index = (_, res) => {
    res.status(200).json(data);
};

exports.show = (req, res, next) => {
    
    // const { _id} = req.params.id;
    // const ID = data.find({UniqID:_id});
    // res.status(200).json(ID);  
    
//     const ID = data.find(req.params.id);
//    console.log(ID);
//     res.status(200).json(data);
    try {

        const Id = req.params.id;
        res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }

};