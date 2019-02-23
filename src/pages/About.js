import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const {color} = query;

    return (
        <div>
            <h2 style={{color}}>
                소개
            </h2>
            <p>
                hello This is {match.params.name? match.params.name : "react"} , I am Studing React router At the momonet.
                I hope This Library will be used for long time from web programmers
            </p>
        </div>
    )
}

export default About;