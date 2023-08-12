import * as Styled from './styles';

type LetterLightProps = React.ComponentProps<typeof Styled.LetterLight>;

export const LetterLight = ({ children, ...props }: LetterLightProps) => {
  return <Styled.LetterLight {...props}>{children}</Styled.LetterLight>;
};
