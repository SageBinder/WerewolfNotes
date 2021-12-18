import {Player} from "./Player";

export class Game {
    private players: Array<Player>;

    constructor(players: Array<Player>) {
        this.players = players;
    }
}
