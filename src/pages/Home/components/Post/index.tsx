import { PostType } from '../../../../actions/postActions/postTypes';
import { LetterLight } from '../../../../components/LetterLight';
import { TitleContainer } from '../../../../components/TitleContainer';
import * as Styled from './styles';
import editIcon from '../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import { DeleteModal } from '../../../../components/DeleteModal';
import { useState } from 'react';
import { UpdateModal } from '../../../../components/UpdateModal';
import { formatDistanceToNow } from 'date-fns';
import { useAppSelector } from '../../../../redux/hooks';

type PostProps = React.ComponentProps<typeof Styled.Post> & {
  post: PostType;
};

export const Post = ({ children, post, ...props }: PostProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const user = useAppSelector((state) => state.user);

  function openDeleteModal() {
    setDeleteModalOpen(true);
  }
  function openEditModal() {
    setEditModalOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalOpen(false);
  }
  function closeEditModal() {
    setEditModalOpen(false);
  }

  const postDate = new Date(post.created_datetime);

  const formattedDistance = formatDistanceToNow(postDate, {
    addSuffix: true,
  });

  return (
    <Styled.Post {...props}>
      <TitleContainer title={post.title}>
        {user.username === post.username && (
          <Styled.OptionsInPost>
            <img
              src={deleteIcon}
              alt="Delete"
              onClick={() => openDeleteModal()}
            />
            <img src={editIcon} alt="Edit" onClick={() => openEditModal()} />
          </Styled.OptionsInPost>
        )}
      </TitleContainer>
      <Styled.PostContent>
        <Styled.TopContent>
          <LetterLight css={{ fontWeight: 700 }}>@{post.username}</LetterLight>
          <LetterLight>{formattedDistance}</LetterLight>
        </Styled.TopContent>
        <Styled.Content>{post.content}</Styled.Content>
      </Styled.PostContent>
      <DeleteModal
        open={deleteModalOpen}
        postId={post.id}
        closeModal={closeDeleteModal}
      />
      <UpdateModal
        open={editModalOpen}
        closeModal={closeEditModal}
        postId={post.id}
      />
      {children}
    </Styled.Post>
  );
};
