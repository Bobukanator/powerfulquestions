<template>
  <section>
    <NuxtLink to="/">
      <div class="columns is-centered notification is-primary">
        GROW Model - Powerful Questions
      </div>
    </NuxtLink>
    <section v-if="goalQuestions.length > 0">
      <NuxtLink to="/grow">
        <div class="columns is-centered notification is-secondary">
          <div
            class="column has-text-centered is-3"
            @click="getGoalQuestions()"
          >
            <h2 class="title">Goal</h2>
          </div>
        </div>
      </NuxtLink>
      <thequestiongroup :questions="goalQuestions"></thequestiongroup>
    </section>
    <section v-if="realityQuestions.length > 0">
      <NuxtLink to="/grow">
        <div class="columns is-centered notification is-secondary">
          <div
            class="column has-text-centered is-3"
            @click="getRealityQuestions()"
          >
            <h2 class="title">Reality</h2>
          </div>
        </div>
      </NuxtLink>
      <thequestiongroup :questions="realityQuestions"></thequestiongroup>
    </section>
    <section v-if="optionsQuestions.length > 0">
      <NuxtLink to="/grow">
        <div class="columns is-centered notification is-secondary">
          <div
            class="column has-text-centered is-3"
            @click="getOptionsQuestions()"
          >
            <h2 class="title">Options</h2>
          </div>
        </div>
      </NuxtLink>
      <thequestiongroup :questions="optionsQuestions"></thequestiongroup>
    </section>
    <section v-if="actionQuestions.length > 0">
      <NuxtLink to="/grow">
        <div class="columns is-centered notification is-secondary">
          <div
            class="column has-text-centered is-3"
            @click="getActionQuestions()"
          >
            <h2 class="title">Will</h2>
          </div>
        </div>
      </NuxtLink>
      <thequestiongroup :questions="actionQuestions"></thequestiongroup>
    </section>
  </section>
</template>

<script>
import Thequestiongroup from "../components/thequestiongroup.vue";
const QUESTIONLIMIT = "4";

export default {
  name: "MainPage",
  components: { Thequestiongroup },
  data() {
    return {
      goalQuestions: [],
      realityQuestions: [],
      optionsQuestions: [],
      actionQuestions: [],
    };
  },
  mounted() {
    this.getGoalQuestions();
    this.getRealityQuestions();
    this.getOptionsQuestions();
    this.getActionQuestions();
  },
  methods: {
    async getRandomInterviewQuestionsByTag(tag) {
      const response = await this.$dataApi.getRandomInterviewQuestionsByTag(
        tag,
        QUESTIONLIMIT
      );
      return response;
    },
    async getGoalQuestions() {
      this.goalQuestions = await this.getRandomInterviewQuestionsByTag("goal");
    },
    async getRealityQuestions() {
      this.realityQuestions = await this.getRandomInterviewQuestionsByTag(
        "reality"
      );
    },
    async getOptionsQuestions() {
      this.optionsQuestions = await this.getRandomInterviewQuestionsByTag(
        "options"
      );
    },
    async getActionQuestions() {
      this.actionQuestions = await this.getRandomInterviewQuestionsByTag(
        "action"
      );
    },
  },
};
</script>
