import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { TitleText } from '../TitleText';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/userActions/actionCreators';
export const SignUpComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useDispatch();

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
            setInputValue(event.target.value);
          }}
        />
      </div>
      <Button
        disabled={inputValue.length <= 0}
        css={{ alignSelf: 'end', marginTop: 15, fontWeight: 600 }}
        onClick={() => {
          dispatch(login(inputValue));
        }}
      >
        ENTER
      </Button>
    </Styled.SignUpComponent>
  );
};
