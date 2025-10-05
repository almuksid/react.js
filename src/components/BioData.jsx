import React from 'react'

const BioData = (props) => {
  return (
    <div className="bio-data">
        <h2>Biodata from {props.name}</h2>
        <div className="prtsonal-info">
            <p>Mobile : {props.mobile}</p>
            <p>Email: {props.email} </p>
            <p>Linkedin : {props.linkedin} </p>
            <div className="skill">
                <h3>My Skills: </h3>
                <ul>
                    {props.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="interest">
                <h3>My Interest: </h3>
                <ul>
                    {props.interests.map(interest => (
                        <li key={interest}>{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BioData
