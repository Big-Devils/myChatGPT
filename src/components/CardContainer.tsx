import Title from '@/components/Title';
import { Card } from 'antd';
import React, { ReactNode } from 'react';

const CardContainer: React.FC<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <Card>
      <Title title={title} />
      <div className="pdt15">{children}</div>
    </Card>
  );
};

export default CardContainer;
