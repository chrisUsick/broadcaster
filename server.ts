
///<reference path='c:\DefinitelyTyped\socket.io\socket.io.d.ts'/>

import express = require('express');
import http = require('http');
import path = require('path');
import socket = require('socket.io');


var IP_CONFIG = '192.168.1.47'

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function (req: express.Request, res: express.Response) {
    res.sendfile(__dirname + '/app/index.html')

});

var server = http.createServer(app).listen(app.get('port'), IP_CONFIG, function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// web sockets
var bcIDs: Array<string> = []
var io = socket.listen(server)
io.sockets.on('connection', (socket) => {
    socket.on('broadcastID', function (data) {
        console.log('new broadcaster: ', data)
        socket.set('bcID', data, () => { console.log('set bcID to socket' )})
        bcIDs.push(data)
    })
    
    socket.on('getBroadcastList', (fn) => {
        fn(bcIDs)
        //socket.emit('broadcastList', bcIDs)
    })
    socket.on('disconnect', () => {
        socket.get('bcID', (err, id) => {
            bcIDs = bcIDs.filter((val, i) => {
                console.log('DELETING bcID: ' + id)
                return val != id
            })
        })

    })
})