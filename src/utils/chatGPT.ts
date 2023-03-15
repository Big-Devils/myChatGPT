import { Configuration, OpenAIApi } from "openai";

const CHAT_GPT_API_KEY = '';

const configuration = new Configuration({
  apiKey: CHAT_GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function answerByAI(msg: string) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: msg,
      max_tokens: 2049,
      presence_penalty: 0,
      frequency_penalty: 0.5,
      stream: false,
    });
    // return completion.data.choices?.[0].text?.replace(/[\r\n]/g,"");
    console.log('openai answer message ==>:', completion.data.choices);
    return completion.data.choices?.[0].text;
  } catch (error: any) {
    if (error.response) {
      console.log('chatGPT error =>', error.response.status);
      console.log('chatGPT error =>', error.response.data);
    } else {
      console.log('chatGPT error =>', error.message);
    }
  }
}
