import vuetify from "../plugins/vuetify";

export default (key) => {
  return vuetify.framework.lang.t(`$vuetify.${key}`);
};
