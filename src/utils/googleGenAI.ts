import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
async function genAI(input: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: input,
  });
  console.log(response.text);
  return response.text;
}
export default genAI;
