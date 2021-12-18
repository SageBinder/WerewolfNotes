import React, {useState} from 'react';
import {Role} from "../../../werewolf/Role";
import RoleComponent from "./RoleComponent";
import {Faction} from "../../../werewolf/Faction";

const ChooseRoles = () => {
    const [ roles, setRoles ] = useState<Array<Role>>([]);

    return (
        <div>
            <h2>Roles</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Faction</th>
                        <th>First Night Action</th>
                        <th>Nightly Action</th>
                    </tr>
                </thead>
                <tbody>{roles.map(role => <RoleComponent role={role}/>)}</tbody>
            </table>
            <NewRoleComponent roles={roles} setRoles={setRoles}/>
        </div>
    );
};



const NewRoleComponent = ({roles, setRoles}: {roles: Array<Role>, setRoles: React.Dispatch<React.SetStateAction<Array<Role>>>}) => {
    const roleNames: Array<string> = Object.keys(Role.roleFactoryMap).concat("Custom");
    const [ newRoleName, setNewRoleName ] = useState(roleNames[0]);

    if(newRoleName.toLowerCase() === "custom") {
        return (
            <div>
                <br/>
                <RoleDropdown key={"roleDropdown"} roleNames={roleNames} setNewRole={setNewRoleName}/>
                <br/>
                <CustomRoleComponent roles={roles} setRoles={setRoles}/>
            </div>
        );
    } else {
        return (
            <div>
                <RoleDropdown key={"roleDropdown"} roleNames={roleNames} setNewRole={setNewRoleName}/>
                <button onClick={() => setRoles(roles.concat(Role.roleFactoryMap[newRoleName]()))}>Add Role</button>
            </div>
        );
    }
}

const RoleDropdown = ({roleNames, setNewRole}: {roleNames: Array<string>, setNewRole: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <select name={"roles"} id={"roles"} onChange={e => setNewRole(e.currentTarget.value)}>
            {roleNames.map(role => <option value={role}>{role}</option>)}
        </select>
    );
}

const CustomRoleComponent = ({roles, setRoles}: {roles: Array<Role>, setRoles: React.Dispatch<React.SetStateAction<Array<Role>>>}) => {
    const [ roleName, setRoleName ] = useState<string>("");
    const [ faction, setFaction ] = useState<Faction>(Faction.Villagers);
    const [ firstNightAction, setFirstNightAction ] = useState<boolean>(false);
    const [ nightlyAction, setNightlyAction ] = useState<boolean>(false);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Faction</th>
                        <th>First Night Action</th>
                        <th>Nightly Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input onInput={e => setRoleName(e.currentTarget.value)}/></td>
                        <td>
                            <select onChange={e => setFaction(Faction[e.currentTarget.value as keyof typeof Faction])}>
                                {Object.keys(Faction)
                                    .filter((key: any) => typeof Faction[key] !== "string")
                                    .map(faction => <option value={faction}>{faction}</option>)}
                            </select>
                        </td>
                        <td><input type={"checkbox"} onChange={e => setFirstNightAction(e.currentTarget.checked)}/></td>
                        <td><input type={"checkbox"} onChange={e => setNightlyAction(e.currentTarget.checked)}/></td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <button onClick={() => setRoles(roles.concat(new Role(roleName, faction, firstNightAction, nightlyAction)))}>
                Add Role
            </button>
        </div>
    );
}

export default ChooseRoles;