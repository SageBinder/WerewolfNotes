import {Role} from "./Role";

export class GameSetup {
    private players: Array<string>;
    private roles: Array<Role>;
    private artifacts: Array<Role>;

    constructor(players: Array<string>, roles: Array<Role>, artifacts: Array<Role>) {
        this.players = players;
        this.roles = roles;
        this.artifacts = artifacts;
    }

    // toJson() : JSON {
    //
    // }
    //
    // static fromJson(JSON) : GameSetup {
    //
    // }
}
