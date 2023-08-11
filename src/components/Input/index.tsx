import * as Styled from './styles';

type InputProps = React.ComponentProps<typeof Styled.Input>;
export const Input = ({ children, ...props }: InputProps) => {
  return <Styled.Input {...props}>{children}</Styled.Input>;
};
