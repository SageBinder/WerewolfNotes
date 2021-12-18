import {Role} from "./Role";
import {Artifact} from "./Artifact";
import {Faction} from "./Faction";

export class Player {
    readonly name: string;
    private role: Role;
    private artifact: Artifact;
    private isAlive: boolean;

    constructor(name: string, role: Role = Role.none(), artifact: Artifact = Artifact.none(), isAlive: boolean = true) {
        this.name = name;
        this.role = role;
        this.artifact = artifact;
        this.isAlive = isAlive;
    }

    getFaction() : Faction {
        if(this.artifact.overridesPlayerFaction) {
            return this.artifact.factionOverride;
        } else {
            return this.role.faction;

        }
    }
}