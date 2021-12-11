import getLocaleText from "./getLocalText";

export default {
  getLangText(key, params = {}) {
    return getLocaleText(key, params);
  },
};
