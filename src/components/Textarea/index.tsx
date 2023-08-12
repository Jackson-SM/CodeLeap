import * as Styled from './styles';

type TextareaProps = React.ComponentProps<typeof Styled.Textarea>;

export const Textarea = ({ children, ...props }: TextareaProps) => {
  return <Styled.Textarea {...props}>{children}</Styled.Textarea>;
};
