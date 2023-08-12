import * as Styled from './styles';

type FieldInputProps = React.ComponentProps<typeof Styled.FieldInput>;

export const FieldInput = ({ children, ...props }: FieldInputProps) => {
  return <Styled.FieldInput {...props}>{children}</Styled.FieldInput>;
};
