import React from 'react'
import { CTA } from './ButtonStyles'
const Button = ({
   children,
   width,
   height,
   background,
   color,
   shadow,
   border,
   onClick,
   ...props 
}) => {
  return (
    <CTA 
      width={width} 
      height={height} 
      background={background} 
      color={color} 
      shadow={shadow} 
      border={border}
      onClick={onClick}
      {...props}
    >
      {children}
    </CTA>
  )
}

export default Button
