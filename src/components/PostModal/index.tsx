import React from 'react';

import * as Styled from './styles';
import { Modal } from '../Modal';

type PostModalProps = React.ComponentProps<typeof Styled.PostModal> & {
  open: boolean;
};

export const PostModal = ({ children, ...props }: PostModalProps) => {
  return (
    <Modal {...props}>
      <Styled.PostModal {...props}>{children}</Styled.PostModal>
    </Modal>
  );
};
