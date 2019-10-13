import React from 'react';
import './Error.css';

interface ErrorProps {
    error: object;
}

const Error: React.FC<ErrorProps> = (props) => {
    return (
        <tr>
            {
                Object.values(props.error).map((value) => {
                    return <td><p>{value}</p></td>
                })
            }
        </tr>
    );
}

export default Error;