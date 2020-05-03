import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link} from "react-router-dom";

const Dog = ({id, name, toggle, getStatus}) => {
    return <Link to={`/detail/${id}`} >
<li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                {name}
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
    </li></Link>
};


export default Dog;