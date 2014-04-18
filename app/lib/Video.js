///<reference path="peer.d.ts"/>
///<reference path='c:\DefinitelyTyped\socket.io-client\socket.io-client.d.ts'/>
var Video;
(function (Video) {
    var Broadcast = (function () {
        function Broadcast(peer, stream, socket) {
            this.peer = peer;
            this.stream = stream;
            this.peer.on('open', function () {
                $('#my-id').text(peer.id);
                socket.emit('broadcastID', peer.id);
            });
            this.peer.on('connection', function (dataCon) {
                console.log('Peer wanting to connect!', dataCon.peer);
                var call = peer.call(dataCon.peer, stream);
                //dataCon.send(stream)
            });
        }
        return Broadcast;
    })();
    Video.Broadcast = Broadcast;
})(Video || (Video = {}));
//# sourceMappingURL=Video.js.map
