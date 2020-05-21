import parse from "date-fns/parse";

export default ({ app }, inject) => {
  inject(
    "date_display",
    (
      dateString = new Date(),
      beforeFormat = "yyyy/MM/dd HH:mm:ss",
      afterFormat = "yyyy年MM月dd日 HH時mm分"
    ) => {
      return parse(dateString, beforeFormat, afterFormat);
    }
  );
};
