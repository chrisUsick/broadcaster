///<reference path='c:\DefinitelyTyped\socket.io\socket.io.d.ts'/>
var express = require('express');
var http = require('http');
var path = require('path');
var socket = require('socket.io');

var IP_CONFIG = '192.168.1.47';

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

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

var server = http.createServer(app).listen(app.get('port'), IP_CONFIG, function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// web sockets
var bcIDs = [];
var io = socket.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('broadcastID', function (data) {
        console.log('new broadcaster: ', data);
        socket.set('bcID', data, function () {
            console.log('set bcID to socket');
        });
        bcIDs.push(data);
    });

    socket.on('getBroadcastList', function (fn) {
        fn(bcIDs);
        //socket.emit('broadcastList', bcIDs)
    });
    socket.on('disconnect', function () {
        socket.get('bcID', function (err, id) {
            bcIDs = bcIDs.filter(function (val, i) {
                console.log('DELETING bcID: ' + id);
                return val != id;
            });
        });
    });
});
//# sourceMappingURL=server.js.map
