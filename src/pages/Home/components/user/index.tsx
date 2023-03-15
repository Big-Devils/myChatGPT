import {Button} from "antd";
import React from 'react';
import s from './index.less';

const User: React.FC<{}> = ({}) => {

  function topUp() {

  }

  return (
    <div className={s.container}>
      <div>
        <div>
          <span>用户名：</span>
          <span>xxxx</span>
        </div>
        <div>
          <span>剩余使用次数：</span>
          <span>20</span>
        </div>
        <div>
          <span>钱包余额：</span>
          <span>6.00</span>
        </div>
      </div>
      <div className={s.container_btn_warp}>
        <Button onClick={topUp} className={s.warp_btn}>充值</Button>
      </div>
    </div>
  );
}

export default User;
