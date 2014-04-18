//declare module 'peer' {
//    interface ServerOpts {
//        host: string
//        port: string
//        path?: string
//    }
//    class Peer {
//        constructor(opts: Object)
//    }
//    export = Peer
//}

interface ServerOpts {
    host: string
    port: string
    path?: string
}
// https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API
// this is an empty interface for the MediaStream class from mozilla dev
interface MediaStream {

}
// used in Peer.on mediaStream parameter
// http://peerjs.com/docs/#mediaconnection
interface MediaConnection {
    answer: (stream?: MediaStream[]) => void
    on: (event:string, callback:(stream:MediaStream)=>void)=>void
}
interface DataConnection {
    send: (data: any) => void
    peer: string
    on: (event:string, cb:(data:any)=>void)=>void
}
declare class Peer {
    public id: string
    //public 
    constructor(opts: Object)
    on(event: string, callback: (con: any) => void): void
    //on(event: string, callback: (mediaStream: MediaConnection) => void): void
    //on(event: string, callback: (dataConnection: DataConnection) => void): void
    connect(destPeerId: any): DataConnection
    call(destPeerId: any, mediaStream?:MediaStream):MediaConnection
}