import { defineRule, configure } from "vee-validate";
import { required, min, email  } from "@vee-validate/rules";

import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

export default defineNuxtPlugin((nuxtApp) => {
  // 定義全域的規則
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);

  
  // 自訂驗證規則
  defineRule("isPhone", (value) => {
    const phoneNumberRegex = /^(09)[0-9]{8}$/;
    return phoneNumberRegex.test(value) ? true : "請輸入正確的電話號碼";
  });

  // 設定多國語系與驗證訊息
  configure({
    // 載入繁體中文的設定檔，產生繁體中文的驗證訊息
    generateMessage: localize({ zh_TW: zhTW }),
  });

  // 設定預設語言為繁體中文
  setLocale("zh_TW");
});