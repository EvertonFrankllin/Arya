import React from 'react'

const Button = ({children, className, style}) => {
    const defaultStyle = {backgroundColor: "#38b6ff", color: "#fff"};
    const combinedStyle = {...defaultStyle, ...style};

  return <button className={className} style={combinedStyle}> {children} </button>;

};

export default Button;
