import React from 'react';
import {Role} from "../../../werewolf/Role";
import {Faction} from "../../../werewolf/Faction";

const RoleComponent = ({role, removeRole, copyRole, moveRoleUp, moveRoleDown}:
                           {role: Role, removeRole: any, copyRole: any, moveRoleUp: any, moveRoleDown: any}) => {
    return <tr>
        <td>{role.name}</td>
        <td>{Faction[role.faction]}</td>
        <td>{String(role.hasFirstNightAction)}</td>
        <td>{String(role.hasNightlyAction)}</td>
        <td>
            <button onClick={() => copyRole(role)}>Copy</button>
        </td>
        <td>
            <button onClick={() => removeRole(role)}>Delete</button>
        </td>
        <td>
            <button onClick={() => moveRoleUp(role)}>Move Up</button>
        </td>
        <td>
            <button onClick={() => moveRoleDown(role)}>Move Down</button>
        </td>
    </tr>
}

export default RoleComponent;