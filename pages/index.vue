<template>
  <section class="section">
    <thequestion question="this is a question"></thequestion>
  </section>
</template>

<script>
import thequestion from "~/components/thequestion";

export default {
  name: "MainPage",
  components: {
    thequestion,
  },
};
</script>
