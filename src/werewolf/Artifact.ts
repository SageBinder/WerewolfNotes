import {Faction} from "./Faction";

class Artifact {
    readonly name: string;

    readonly isDayActionArtifact: boolean;
    dayActionUsed: boolean = false;

    readonly isNightActionArtifact: boolean;
    readonly isFirstNightActionArtifact: boolean;

    readonly overridesPlayerFaction: boolean;
    readonly factionOverride: Faction;

    constructor(name: string,
                isDayActionArtifact: boolean = false,
                isNightActionArtifact: boolean = false,
                isFirstNightActionArtifact: boolean = false,
                overridesPlayerFaction: boolean = false,
                factionOverride: Faction = Faction.Neutrals) {
        this.name = name;
        this.isDayActionArtifact = isDayActionArtifact;
        this.isNightActionArtifact = isNightActionArtifact;
        this.isFirstNightActionArtifact = isFirstNightActionArtifact;
        this.overridesPlayerFaction = overridesPlayerFaction;
        this.factionOverride = factionOverride;
    }

    static none() : Artifact {
        return new Artifact("");
    }
}

export {Artifact}