import * as Styled from './styles';

type TitleTextProps = React.ComponentProps<typeof Styled.TitleText>;

export const TitleText = ({ children, ...props }: TitleTextProps) => {
  return <Styled.TitleText {...props}>{children}</Styled.TitleText>;
};
