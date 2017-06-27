import ListenServer from "dimensions/listenserver";
import Client from "dimensions/client";
import Extension from "dimensions/extension";
import Packet from "dimensions/packet";
import PacketTypes from "dimensions/packettypes";
import TerrariaServer from "dimensions/terrariaserver";
import * as Net from "net";
import PriorPacketHandler from "./priorpackethandler";

class PlayerInfo implements Extension {
    public name: string;
    public version: string;
    public author: string;
    public reloadable: boolean;
    public priorPacketHandlers: PriorPacketHandler;
    public listenServers: { [name: string]: ListenServer };

    constructor() {
        this.name = "Player Info";
        this.version = "v1.0";
        this.author = "popstarfreas";
        this.reloadable = false;
        this.priorPacketHandlers = new PriorPacketHandler(this);
    }

    public setListenServers(listenServers: { [name: string]: ListenServer }): void {
        this.listenServers = listenServers;
    }
}

export default PlayerInfo;
