
import { type Locales, Language } from '../types';

export const locales: Locales = {
  [Language.EN]: {
    title: "Pixel Art Generator",
    promptLabel: "Enter a prompt to create your pixel art",
    placeholder: "e.g., a knight fighting a dragon",
    buttonText: "Generate",
    generatingText: "Generating...",
    errorPrefix: "Error",
    initialMessage: "Your pixel art will appear here.",
    languageName: "English"
  },
  [Language.KU]: {
    title: "دروستکەری وێنەی پێکسڵ",
    promptLabel: "داواکارییەک بنووسە بۆ دروستکردنی وێنە پێکسڵەکەت",
    placeholder: "بۆ نموونە، سوارچاکێک شەڕ لەگەڵ ئەژدیهایەک دەکات",
    buttonText: "دروستکردن",
    generatingText: "لە دروستکردندایە...",
    errorPrefix: "هەڵە",
    initialMessage: "وێنە پێکسڵەکەت لێرە دەردەکەوێت.",
    languageName: "کوردی"
  },
};
