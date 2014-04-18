///<reference path="c:\DefinitelyTyped\jquery\jquery.d.ts"/>
///<reference path="c:\DefinitelyTyped\jquerymobile\jquerymobile.d.ts"/>
///<reference path="c:\DefinitelyTyped\knockout\knockout.d.ts"/>
///<reference path="peer.d.ts"/>
///<reference path="typings.d.ts"/>
///<reference path='c:\DefinitelyTyped\socket.io-client\socket.io-client.d.ts'/>
define(["require", "exports", 'jquery', 'socket.io-client'], function(require, exports, $, io) {
    var App;
    (function (App) {
        function run() {
            var PEER_SERVER = { host: '192.168.1.47', port: '9000' };

            // socket.io
            var socket = io.connect('http://192.168.1.47');

            // Compatibility shim
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            // Receiving a call
            // this won't be happening on the broadcasting page!
            //peer.on('call', function (call) {
            //    // Answer the call automatically (instead of prompting user) for demo purposes
            //    call.answer(window.localStream);
            //});
            function makeAvailable() {
                navigator.getUserMedia({ audio: true, video: true }, function (stream) {
                    // Set your video displays
                    $('#my-video').prop('src', URL.createObjectURL(stream));

                    window.localStream = [stream];
                    var peer = new Peer(PEER_SERVER);

                    peer.on('open', function () {
                        $('#my-id').text(peer.id);
                        socket.emit('broadcastID', peer.id);
                    });
                    peer.on('connection', function (dataCon) {
                        console.log('Peer wanting to connect!', dataCon.peer);
                        var call = peer.call(dataCon.peer, stream);
                        //dataCon.send(stream)
                    });
                }, function () {
                    alert('there was an error');
                });
            }

            function loadBroadcast(id) {
                var peer = new Peer(PEER_SERVER);

                var conn = peer.connect(id);
                conn.on('open', function () {
                    console.log('connection opened, ' + peer.id);
                    conn.on('data', function (data) {
                        console.log('data received: ');
                        $('#broadcast-video').prop('src', URL.createObjectURL(data));
                    });
                });
                peer.on('call', function (call) {
                    call.answer();
                    call.on('stream', function (stream) {
                        $('#broadcast-video').prop('src', URL.createObjectURL(stream));
                    });
                });
            }
            $(document).on('pagecreate', '#broadcast', function (e) {
                // PeerJS object
                makeAvailable();
            });
            $(document).on('pageshow', '#view', function (e) {
                socket.emit('getBroadcastList', function (data) {
                    data.forEach(function (val, i) {
                        console.log(val);
                        $('<li/>', {
                            text: val,
                            click: function (e) {
                                loadBroadcast($(this).text());
                            }
                        }).appendTo('#broadcastList');
                    });
                });
            });
        }
        App.run = run;
    })(App || (App = {}));

    
    return App;
});
