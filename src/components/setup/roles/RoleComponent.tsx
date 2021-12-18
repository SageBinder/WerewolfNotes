import React from 'react';
import {Role} from "../../../werewolf/Role";
import {Faction} from "../../../werewolf/Faction";

const RoleComponent = ({role}: {role: Role}) => {
    return <tr>
        <td>{role.name}</td>
        <td>{Faction[role.faction]}</td>
        <td>{String(role.hasFirstNightAction)}</td>
        <td>{String(role.hasNightlyAction)}</td>
        <td>
            <button>Copy</button>
        </td>
        <td>
            <button>Delete</button>
        </td>
    </tr>
}

export default RoleComponent;