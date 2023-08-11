import * as Styled from './styles';

type BoxProps = React.ComponentProps<typeof Styled.Box>;
export const Box = ({ children, ...props }: BoxProps) => {
  return <Styled.Box {...props}>{children}</Styled.Box>;
};
