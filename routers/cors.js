const express=require('express')
const cors=require('cors')

const whitelist=['mongodb+srv://admin:holamundo3147@cluster0.nh008.mongodb.net/myFirstDatabase?retryWrites=true&w=majority']

var corsOptionsDelegate=(req,callback)=>{
    var corsOptions;
    if(whitelist.indexOf(req.header('Origin'))!==-1){
        corsOptions={origin:true}
    }else{
        corsOptions={origin:false}
    }
    callback(null,corsOptions)
}

exports.cors=cors()
exports.corsWithOptions=cors(corsOptionsDelegate)