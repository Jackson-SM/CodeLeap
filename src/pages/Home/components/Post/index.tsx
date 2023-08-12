import { LetterLight } from '../../../../components/LetterLight';
import { TitleContainer } from '../../../../components/TitleContainer';
import * as Styled from './styles';
export const Post = () => {
  return (
    <Styled.Post>
      <TitleContainer title="My First Post at CodeLeap Network!">
        <span>icon</span>
        <span>icon</span>
      </TitleContainer>
      <Styled.PostContent>
        <Styled.TopContent>
          <LetterLight css={{ fontWeight: 700 }}>@Victor</LetterLight>
          <LetterLight>25 minutes ago</LetterLight>
        </Styled.TopContent>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br />
          <br />
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </Styled.PostContent>
    </Styled.Post>
  );
};
