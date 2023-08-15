import React from 'react';
import { TitleText } from '../TitleText';
import * as Styled from './styles';

type TitleContainerProps = React.ComponentProps<
  typeof Styled.TitleContainer
> & {
  title: string;
};
export const TitleContainer = ({
  children,
  title,
  ...props
}: TitleContainerProps) => {
  const titleFormat =
    title.length >= 50 ? title.substring(0, 45) + '...' : title;

  return (
    <Styled.TitleContainer {...props}>
      <TitleText css={{ color: '#fff', overflow: 'hidden' }}>
        {titleFormat}
      </TitleText>
      {children}
    </Styled.TitleContainer>
  );
};
