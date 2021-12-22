import React, {useState} from 'react';
import {Artifact} from "../../../werewolf/Artifact";
import RoleComponent from "../roles/RoleComponent";
import {Role} from "../../../werewolf/Role";
import {Faction} from "../../../werewolf/Faction";
import ArtifactComponent from "./ArtifactComponent";

export const ChooseArtifacts = ({artifacts, setArtifacts}: {artifacts: Array<Artifact>, setArtifacts: any}) => {
    const removeArtifact = (artifactToRemove: Artifact) => {
        setArtifacts(artifacts.filter(artifact => artifact !== artifactToRemove));
    }

    const copyArtifact = (artifactToCopy: Artifact) => {
        const artifactToCopyIdx: number = artifacts.indexOf(artifactToCopy);

        if(artifactToCopyIdx === -1) {
            return;
        }

        setArtifacts(
            artifacts.slice(0, artifactToCopyIdx + 1)
                .concat(
                    Artifact.copy(artifactToCopy),
                    artifacts.slice(artifactToCopyIdx + 1, artifacts.length)
                ));
    }

    const moveArtifactUp = (artifactToMove: Artifact) => {
        const artifactToMoveIdx: number = artifacts.indexOf(artifactToMove);

        if(artifactToMoveIdx === -1 || artifactToMoveIdx === 0) {
            return;
        }

        setArtifacts(artifacts.map((artifact, idx) =>
            (idx === artifactToMoveIdx) ? artifacts[artifactToMoveIdx - 1]
                : (idx === artifactToMoveIdx - 1) ? artifacts[artifactToMoveIdx]
                    : artifact));
    }

    const moveArtifactDown = (artifactToMove: Artifact) => {
        const artifactToMoveIdx: number = artifacts.indexOf(artifactToMove);

        if(artifactToMoveIdx === -1 || artifactToMoveIdx === artifacts.length - 1) {
            return;
        }

        setArtifacts(artifacts.map((artifact, idx) =>
            (idx === artifactToMoveIdx) ? artifacts[artifactToMoveIdx + 1]
                : (idx === artifactToMoveIdx + 1) ? artifacts[artifactToMoveIdx]
                    : artifact));
    }

    return (
        <div>
            <h2>Artifacts</h2>
            <table>
                <thead>
                <tr>
                    <th>Artifact</th>
                    <th>Day Action</th>
                    <th>Night Action</th>
                    <th>First Night Action</th>
                    <th>Faction Override</th>
                </tr>
                </thead>
                <tbody>
                {artifacts.map(artifact => <ArtifactComponent
                    artifact={artifact}
                    removeArtifact={removeArtifact}
                    copyArtifact={copyArtifact}
                    moveArtifactUp={moveArtifactUp}
                    moveArtifactDown={moveArtifactDown}/>)}
                </tbody>
            </table>
            <NewArtifactComponent artifacts={artifacts} setArtifacts={setArtifacts}/>
        </div>
    );
}

const NewArtifactComponent = ({artifacts, setArtifacts}: {artifacts: Array<Artifact>, setArtifacts: any}) => {
    const artifactNames: Array<string> = Object.keys(Artifact.artifactFactoryMap).concat("Custom");
    const [ newArtifactName, setNewArtifactName ] = useState(artifactNames[0]);

    if(newArtifactName.toLowerCase() === "custom") {
        return (
            <div>
                <br/>
                <ArtifactDropdown key={"artifactDropdown"} artifactNames={artifactNames} setNewArtifact={setNewArtifactName}/>
                <br/>
                <CustomArtifactComponent artifacts={artifacts} setArtifacts={setArtifacts}/>
            </div>
        );
    } else {
        return (
            <div>
                <ArtifactDropdown key={"artifactDropdown"} artifactNames={artifactNames} setNewArtifact={setNewArtifactName}/>
                <button onClick={() => setArtifacts(artifacts.concat(Artifact.artifactFactoryMap[newArtifactName]()))}>Add Artifact</button>
            </div>
        );
    }
}

const ArtifactDropdown = ({artifactNames, setNewArtifact}: {artifactNames: Array<string>, setNewArtifact: any}) => {
    return (
        <select name={"artifacts"} id={"artifacts"} onChange={e => setNewArtifact(e.currentTarget.value)}>
            {artifactNames.map(artifact => <option value={artifact}>{artifact}</option>)}
        </select>
    );
}

const CustomArtifactComponent = ({artifacts, setArtifacts}: {artifacts: Array<Artifact>, setArtifacts: any}) => {
    const [ artifactName, setArtifactName ] = useState<string>("");
    const [ isDayActionArtifact, setIsDayActionArtifact ] = useState<boolean>(false);
    const [ isNightActionArtifact, setIsNightActionArtifact ] = useState<boolean>(false);
    const [ isFirstNightActionArtifact, setIsFirstNightActionArtifact ] = useState<boolean>(false);
    const [ factionOverride, setFactionOverride ] = useState<Faction | undefined>(Faction.Neutrals);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Artifact</th>
                    <th>Day Action</th>
                    <th>Night Action</th>
                    <th>First Night Action</th>
                    <th>Faction Override</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input onInput={e => setArtifactName(e.currentTarget.value)}/></td>
                    <td><input type={"checkbox"} onChange={e => setIsDayActionArtifact(e.currentTarget.checked)}/></td>
                    <td><input type={"checkbox"} onChange={e => setIsNightActionArtifact(e.currentTarget.checked)}/></td>
                    <td><input type={"checkbox"} onChange={e => setIsFirstNightActionArtifact(e.currentTarget.checked)}/></td>
                    <td>
                        <select onChange={e => setFactionOverride(Faction[e.currentTarget.value as keyof typeof Faction])}>
                            {Object.keys(Faction)
                                .filter((key: any) => typeof Faction[key] !== "string")
                                .map(faction => <option value={faction}>{faction}</option>)
                                .concat(<option value={"None"}>None</option>)}
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>
            <button onClick={
                () => setArtifacts(
                    artifacts.concat(
                        new Artifact(artifactName,
                            isDayActionArtifact,
                            isNightActionArtifact,
                            isFirstNightActionArtifact,
                            factionOverride !== undefined,
                            factionOverride !== undefined ? (factionOverride as Faction) : Faction.Neutrals)))
            }>
                Add Artifact
            </button>
        </div>
    );
}