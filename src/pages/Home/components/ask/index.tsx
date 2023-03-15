import {SendOutlined} from "@ant-design/icons";
import {Input} from "antd";
import React, {useState} from 'react';
import s from './index.less';


const Ask: React.FC<{
  onSearch: (msg: string) => void
}> = ({onSearch}) => {

  const [input, setInput] = useState('');

  function click() {
    const ask = input;
    onSearch(ask);
    setInput('');
  }

  return (
    <div className={s.container}>
      <Input
        id='ask'
        value={input}
        onChange={e => setInput(e.target.value)}
        className={s.textarea}
        placeholder="请输入你想问的问题"
        onKeyUp={e => {
          if(e.keyCode === 13) click();
        }}
        suffix={(<SendOutlined onClick={click} style={{color: '#6e6e80', cursor:'pointer'}} rotate={-45}/>)}
      />
    </div>
  );
}


export default Ask;
