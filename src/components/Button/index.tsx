import * as Styled from './styles';

type ButtonProps = React.ComponentProps<typeof Styled.Button>;
export const Button = ({ children, ...props }: ButtonProps) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};
