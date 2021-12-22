import {Faction} from "./Faction";

export class Role {
    readonly name: string;
    readonly faction: Faction;
    readonly hasFirstNightAction: boolean;
    readonly hasNightlyAction: boolean;
    private finiteUseAbilities: {[ability: string]: number};

    constructor(name: string,
                faction: Faction,
                hasFirstNightAction: boolean = false,
                hasNightlyAction: boolean = false,
                finiteUseAbilities: {[ability: string]: number} = {}) {
        // TODO: Empty dict as default (does TypeScript handle this the same way that Python does?)
        this.name = name;
        this.faction = faction;
        this.hasFirstNightAction = hasFirstNightAction;
        this.hasNightlyAction = hasNightlyAction;
        this.finiteUseAbilities = finiteUseAbilities;
    }

    static copy(other: Role) {
        return new Role(other.name,
            other.faction,
            other.hasFirstNightAction,
            other.hasNightlyAction,
            {...other.finiteUseAbilities});
    }

    static none() : Role {
        return new Role("", Faction.Neutrals);
    }

    static roleFactoryMap: { [role: string]: Function } = {
        "Werewolf": () => {
            return new Role("Werewolf", Faction.Werewolves, false, true, {});
        },
        "Witch": () => {
            return new Role("Witch", Faction.Villagers, false, true, {"Save": 1, "Kill": 1})
        },
    };
}
