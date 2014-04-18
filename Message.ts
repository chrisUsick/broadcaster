export class Message {

}

export class BroadcastID extends Message {
    public id: string
}

export class Response extends Message {
    public success: boolean
}

export class GetBroadcastList extends Message {

}

export class BroadcastList extends Message {
    public list: Array<BroadcastID>
}