import format from "date-fns/format";
import ja from "date-fns/locale/ja";

export default ({ app }, inject) => {
  inject(
    "date_format",
    (date = new Date(), formatStr = "yyyy/MM/dd HH:mm:ss") => {
      return format(date, formatStr, { locale: ja });
    }
  );
};
