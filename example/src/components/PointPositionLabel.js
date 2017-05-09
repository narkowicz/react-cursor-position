import React from 'react';

export default (props) => {
    const {
        isOutside = true,
        point: {
            x = 0,
            y = 0
        } = {}
    } = props;

    return (
        <div>
            {`x: ${x}`}<br />
            {`y: ${y}`}<br />
            {`isOutside: ${isOutside ? 'true' : 'false'}`}<br />
        </div>
    );
}
