<template>
  <section>
    <CertificateValid v-if="isUserValid" :user-ck="currentCk" />
    <CertificateNotFound v-else />
  </section>
</template>

<script>
import CertificateValid from "./CertificateValid";
import CertificateNotFound from "./CertificateNotFound";
export default {
  name: "MainPage",
  components: { CertificateNotFound, CertificateValid },
  data: () => ({
    currentId: "",
    currentCk: "",
    legalId: "986000131454623",
    usersCk: [
      "1az02q4ed2b0hf39b2e6af9b5156d2da5",
      "2aq02q4en2b03f39b2f6af9s4526d2das",
    ],
  }),
  computed: {
    isUserValid() {
      const isIdLegal = this.currentId && this.currentId === this.legalId;
      const isCkLegal = this.currentCk && this.usersCk.includes(this.currentCk);
      return isIdLegal && isCkLegal;
    },
  },
  async mounted() {
    const { id } = this.$route.params;
    const { lang, ck } = this.$route.query;
    this.$vuetify.lang.current = lang || "ru";
    this.currentId = id;
    this.currentCk = ck;
  },
};
</script>
