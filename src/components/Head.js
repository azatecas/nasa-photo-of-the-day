import React from 'react';

const Head = props => {
    console.log(props.data);
    return (
    <div>
        <h1>{props.data.title}</h1>
        <h2>Today</h2>
        <p> {props.data.date}</p>
    
    </div>
    )
}








export default Head;