import {map} from "lodash";
import React, {useEffect, useRef} from 'react';
import s from './index.less';
import icon from '@/assets/icon.png';

const ASetQA: React.FC<{
  arrayQA: QAType[]
}> = ({arrayQA}) => {

  const chatListRef = useRef(null);

  useEffect(() => {
    const current: {scrollTop: number, scrollHeight: number} = chatListRef.current!
    current.scrollTop = current.scrollHeight
  }, [arrayQA])

  const item = (data: QAType) => {
    return (
      <div key={data.id} className={s.container_qa}>
        <div className={s.qa_q}>
          <div className={s.qa_q_warp}>
            <div className={s.q_title}>问</div>
            <span>{data.q}</span>
          </div>
        </div>

        <div className={s.qa_a}>
          <div className={s.qa_a_warp}>
            <img className={s.a_title} src={icon} alt=""/>
            <pre>{data.a}</pre>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container} ref={chatListRef}>
      {map(arrayQA, i => item(i))}
    </div>
  );
}

export default ASetQA;

export type QAType = {
  q: string,
  a: string,
  id: string
}
