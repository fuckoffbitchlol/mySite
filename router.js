"use strict";

//---begin module scope variables
var configRoutes,
    mongodb = require("mongodb"),
    // assign server address and port number
    mongoServer = new mongodb.Server(
        "localhost",
        mongodb.Connection.DEFAULT_PORT
    ),
    // connect database name and the server ?
    // [todo] what is safe option do for ?
    dbHandle = new mongodb.Db(
        "note", mongoServer, {safe:true}
    );

    dbHandle.open( function(){
        console.log("++ mongodb connected ++");
    });
//---end module scope variables

