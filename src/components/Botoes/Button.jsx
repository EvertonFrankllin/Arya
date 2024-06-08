import React from 'react'

const Button = ({children, className, id, style}) => {
    const defaultStyle = {backgroundColor: "#38b6ff", color: "#fff"};
    const combinedStyle = {...defaultStyle, ...style};

  return <button id={id} className={className} style={{defaultStyle, combinedStyle, style}}> {children} </button>;

};

export default Button;
