import React from 'react';

interface IFlexProps {
  children: React.ReactElement | React.ReactElement[];
  style?: object;
  className?: string;
}
export const Flex = ({children, style, className}: IFlexProps) => <div className={className} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', ...style}}>{children}</div>;
