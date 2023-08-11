import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { TitleText } from '../TitleText';
import * as Styled from './styles';

export const SignUpComponent = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <Styled.SignUpComponent>
      <TitleText>Welcome to CodeLeap network!</TitleText>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 20,
          gap: 5,
        }}
      >
        <span>Please enter your username</span>
        <Input
          type="text"
          placeholder="John doe"
          onChange={(event) => {
            setIsDisabled(event.target.value.length <= 0);
          }}
        />
      </div>
      <Button
        disabled={isDisabled}
        css={{ alignSelf: 'end', marginTop: 15, fontWeight: 600 }}
      >
        ENTER
      </Button>
    </Styled.SignUpComponent>
  );
};
