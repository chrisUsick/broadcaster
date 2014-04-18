///<reference path="peer.d.ts"/>
///<reference path='c:\DefinitelyTyped\socket.io-client\socket.io-client.d.ts'/>
module Video {
    export class Broadcast {
        constructor(private peer: Peer, private stream: MediaStream, socket) {
            this.peer.on('open', function () {
                $('#my-id').text(peer.id);
                socket.emit('broadcastID', peer.id)
                });
            this.peer.on('connection', (dataCon: DataConnection) => {
                console.log('Peer wanting to connect!', dataCon.peer)
                    var call = peer.call(dataCon.peer, stream)

                    //dataCon.send(stream)
                })
        }

    }
}