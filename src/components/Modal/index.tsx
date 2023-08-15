import React from 'react';

import * as Styled from './styles';

type ModalProps = React.ComponentProps<typeof Styled.Modal> & {
  open: boolean;
};

export const Modal = ({ children, ...props }: ModalProps) => {
  return <Styled.Modal {...props}>{children}</Styled.Modal>;
};
