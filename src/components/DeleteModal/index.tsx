import React, { useState } from 'react';

import * as Styled from './styles';
import { TitleText } from '../TitleText';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { deletePost } from '../../actions/postActions/actionCreators';
import { usePostDispatch } from '../../redux/hooks';

type DeleteModalProps = React.ComponentProps<typeof Styled.DeleteModal> & {
  open: boolean;
  postId: number;
  closeModal: () => void;
};

export const DeleteModal = ({
  children,
  postId,
  open,
  closeModal,
  ...props
}: DeleteModalProps) => {
  const dispatch = usePostDispatch();
  const deletePostHandler = async () => {
    await dispatch(deletePost({ id: postId }));
    closeModal();
  };

  return (
    <Modal open={open}>
      <Styled.DeleteModal {...props} open={open}>
        <TitleText>Are you sure you want to delete this item?</TitleText>

        <Styled.ButtonOptions>
          <Button variant="outline" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button variant="warning" onClick={deletePostHandler}>
            Delete
          </Button>
        </Styled.ButtonOptions>
        {children}
      </Styled.DeleteModal>
    </Modal>
  );
};
