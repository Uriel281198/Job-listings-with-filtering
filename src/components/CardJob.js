import React from 'react';
import { Card, Tag } from '../styledCompontes/globalStyled';
const CardJob = (props) => {        
        
    const {
        company, postedAt, contract, level,
        location, languages, role, isFeatured,
        addRole,addLevel,addLanguages,
        isNew, position, logo } = props;            
    return (        
        <Card>
            <img className="Logo" src={logo} alt={position}/>
            <div>
            <div className="Badges">
                <p>{company}</p>
                {isNew ? <Tag blue={'blue'}>NEW!</Tag> : null}
                {isFeatured ? <Tag dark>FEATURED</Tag> : null}
            </div>
            <div className="Title">
                <p>{position}</p>
            </div>
            <div className="Info">
                <p>{postedAt}</p>
                <p>{contract}</p>
                <p>{location}</p>
            </div>
            </div>
            <div className="Tags">
                <p onClick={() => addRole(role)} >{role}</p>
                <p onClick={() => addLevel(level)} >{level}</p>
                {languages.map((x, i) => {
                    return <p onClick={() => addLanguages(x)} key={i}>{x}</p>
                })
                }
            </div>
        </Card>
    )
}
export default CardJob;
