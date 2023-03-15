import ASetQA, {QAType} from "@/pages/Home/components/aSetQA";
import Ask from "@/pages/Home/components/ask";
import User from "@/pages/Home/components/user";
import {createHash} from "@/utils";
import {answerByAI} from "@/utils/chatGPT";
import {useEffect, useState} from "react";
import s from './index.less';

const HomePage: React.FC<{}> = ({}) => {

  const [arrayQA, seArrayQA] = useState<QAType[]>([]);

  async function getAnswer(question: string) {
    if (!question) return undefined;
    const id = createHash();
    seArrayQA([...arrayQA, {q: question, a: '正在思考', id}]);
    const answer = await answerByAI(question);
    seArrayQA([...arrayQA, {q: question, a: answer ?? '', id}]);
  }

  useEffect(() => {
    if (arrayQA.length > 0) {
      localStorage.setItem('localQA', JSON.stringify(arrayQA));
    } else {
      const localQA = JSON.parse(localStorage.getItem('localQA') ?? '[]');
      if (localQA.length > 0) seArrayQA(localQA);
    }
  }, [JSON.stringify(arrayQA)]);

  return (
    <div className={s.container}>
      <div className={s.container_user}>
        <User />
      </div>
      <div className={s.container_qa_warp}>
        <ASetQA arrayQA={arrayQA} />
        <Ask onSearch={getAnswer} />
      </div>
    </div>
  );
};

export default HomePage;
