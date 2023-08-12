import { TitleText } from '../TitleText';
import * as Styled from './styles';

type TitleContainerProps = React.ComponentProps<
  typeof Styled.TitleContainer
> & {
  title: string;
};
export const TitleContainer = ({
  children,
  title,
  ...props
}: TitleContainerProps) => {
  return (
    <Styled.TitleContainer {...props}>
      <TitleText css={{ color: '#fff' }}>{title}</TitleText>
      {children}
    </Styled.TitleContainer>
  );
};
