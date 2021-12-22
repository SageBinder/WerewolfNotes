import React from 'react';
import {Faction} from "../../../werewolf/Faction";
import {Artifact} from "../../../werewolf/Artifact";

const ArtifactComponent = ({artifact, removeArtifact, copyArtifact, moveArtifactUp, moveArtifactDown}:
                                      {artifact: Artifact, removeArtifact: any, copyArtifact: any, moveArtifactUp: any, moveArtifactDown: any}) => {
    return <tr>
        <td>{artifact.name}</td>
        <td>{String(artifact.isDayActionArtifact)}</td>
        <td>{String(artifact.isNightActionArtifact)}</td>
        <td>{String(artifact.isFirstNightActionArtifact)}</td>
        <td>{String(artifact.overridesPlayerFaction ? Faction[artifact.factionOverride] : "")}</td>
        <td>
            <button onClick={() => copyArtifact(artifact)}>Copy</button>
        </td>
        <td>
            <button onClick={() => removeArtifact(artifact)}>Delete</button>
        </td>
        <td>
            <button onClick={() => moveArtifactUp(artifact)}>Move Up</button>
        </td>
        <td>
            <button onClick={() => moveArtifactDown(artifact)}>Move Down</button>
        </td>
    </tr>
}

export default ArtifactComponent;