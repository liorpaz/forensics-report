import React from 'react';

interface IFlexProps {
  children: React.ReactElement | React.ReactElement[];
  style?: object;
  className?: string;
  inline?: boolean;
}
export const Flex = ({children, style, className, inline}: IFlexProps) => <div className={className} style={{display: inline ? 'inline-flex': 'flex', flexDirection: 'row', flexWrap: 'wrap', ...style}}>{children}</div>;
