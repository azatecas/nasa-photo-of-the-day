import React from 'react';
import Head from './Head';


const Image = props => {
    return (
        <div>
            <img 
                src={props.data.url}
            
            />
        </div>
    )

}

export default Image;