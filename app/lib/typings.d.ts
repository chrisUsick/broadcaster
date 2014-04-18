///<reference path="peer.d.ts"/>


interface Navigator {
    getUserMedia?:
    (opts: any,
        successcallback: (mediaStream: MediaStream) => void,
        errorcallback: () => void
    ) => void
    webkitGetUserMedia?: any
    mozGetUserMedia?: any
}

interface Window {
    localStream?: MediaStream[]
}