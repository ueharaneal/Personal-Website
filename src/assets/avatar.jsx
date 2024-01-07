
import React, { useEffect } from 'react';

const Avatar = ({ src, trigger, state, colors, style }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.lordicon.com/lordicon.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
//avatar icon
    return (
        <lord-icon
            src={src}
            trigger={trigger}
            state={state}
            colors={colors}
            style={style}>
        </lord-icon>
    );
};

export default Avatar;



