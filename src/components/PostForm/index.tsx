import React from 'react';
import { TitleText } from '../TitleText';
import { FieldInput } from '../FieldInput';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

type PostFormProps = React.ComponentProps<'form'> & {
  titleForm?: string;
};

export const PostForm = ({ children, titleForm, ...props }: PostFormProps) => {
  return (
    <form {...props}>
      {titleForm && <TitleText>{titleForm}</TitleText>}

      <FieldInput>
        <span>Title</span>
        <Input
          name="title"
          type="text"
          placeholder="Title here"
          maxLength={80}
        />
      </FieldInput>

      <FieldInput>
        <span>Content</span>
        <Textarea
          name="content"
          cols={20}
          rows={4}
          placeholder="Content here"
        />
      </FieldInput>
      {children}
    </form>
  );
};
