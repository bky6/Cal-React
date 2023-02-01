import { Fragment } from "react";

function User(props) {

    //object destructoring assignment
    const {name, age, city} = props.user;
    return (
        <Fragment>
            <tr>
                <td>{props.user.name}</td>
                <td>{props.user.age}</td>
                <td>{props.user.city}</td>
            </tr>
        </Fragment>
    );
}

export default User;