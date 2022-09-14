import React, { FC, useEffect, useReducer } from 'react';
import { useTheme } from '@react-navigation/native';

import { Button, Column, Row, Text } from 'src/components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { increment, selectCount } from 'src/states/counter-slice/counterSlice';

const Home: FC = () => {
  const { colors } = useTheme();
  const countSlice = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Column alignItems='center' flex={1} justifyContent='center' p='16px'>
      <Row alignItems='center' mb='10px' flexDirection={'column'}>
        <Text color={colors.primary} mr={2}>
          {countSlice}
        </Text>

        <Button
          onPress={() => {
            dispatch(increment());
          }}
          text='PRESS ME'
        />
      </Row>
    </Column>
  );
};

export default Home;
