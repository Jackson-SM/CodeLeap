import React, { useState } from 'react';

import * as Styled from './styles';
import { Modal } from '../Modal';
import { Box } from '../Box';
import { Button } from '../Button';
import { CSSProperties } from '@stitches/react';
import { PostForm } from '../PostForm';
import { usePostDispatch } from '../../redux/hooks';
import { updatePost } from '../../actions/postActions/actionCreators';

type UpdateModalProps = React.ComponentProps<typeof Styled.UpdateModal> & {
  open: boolean;
  closeModal: () => void;
  postId: number;
};

export const UpdateModal = ({
  children,
  closeModal,
  postId,
  ...props
}: UpdateModalProps) => {
  const [buttonIsDisable, setButtonIsDisable] = useState(true);

  const dispatch = usePostDispatch();

  const updatePostHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title')!.toString();
    const content = formData.get('content')!.toString();
    await dispatch(updatePost({ id: postId, title, content }));
    closeModal();
  };

  const handleButtonDisable = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const buttonDisabledVerify =
      formData.get('title')?.toString().trim() === '' ||
      formData.get('content')?.toString().trim() === '';
    setButtonIsDisable(buttonDisabledVerify);
  };

  return (
    <Modal {...props}>
      <Styled.UpdateModal {...props}>
        <Box>
          <PostForm
            titleForm="Edit item"
            style={cssBoxContainer}
            onSubmit={updatePostHandler}
            onChange={handleButtonDisable}
          >
            <Styled.ButtonOptions>
              <Button
                type="button"
                variant="outline"
                onClick={() => closeModal()}
              >
                Cancel
              </Button>
              <Button
                disabled={buttonIsDisable}
                type="submit"
                variant="success"
              >
                Save
              </Button>
            </Styled.ButtonOptions>
          </PostForm>
          {children}
        </Box>
      </Styled.UpdateModal>
    </Modal>
  );
};

const cssBoxContainer: CSSProperties = {
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};
