import {history} from '@umijs/max';
import {Button, Result} from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => (
  <Result
    status='500'
    title='500'
    subTitle='Sorry, something went wrong.'
    extra={
      <Button type='primary' onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
