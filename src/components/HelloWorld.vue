<template>
  <main class="soft flex">
    <StyledTypography tag="h1" variant="title">Enter user name</StyledTypography>
    <StyledTypography variant="lead">{{ msg }}</StyledTypography>

    <section class="neumorphism flex">
      <label class="label">{{ username }}</label>
      <input type="text" v-model="username" placeholder="Enter..." />
    </section>

    <StyledButton variant="primary" @click="option = username">Submit</StyledButton>
  </main>

  <ol class="soft" v-if="option">
    <li v-for="lib in data" :key="lib.name">
      {{ lib.name }} {{ new Date(lib.updated_at).toDateString() }}
    </li>
  </ol>
</template>

<script>
import { reactive, ref, watchEffect, toRefs } from "vue";
import { Button as StyledButton, Typography as StyledTypography } from "@gumdrops/core";

export default {
  name: "HelloWorld",
  components: { StyledButton, StyledTypography },
  props: {
    msg: String,
  },
  setup() {
    const username = ref(null);
    const option = ref(null);

    const state = reactive({
      data: [],
    });

    watchEffect(() => {
      if (option.value) {
        fetch(`https://api.github.com/users/${option.value}/repos`)
          .then((response) => response.json())
          .then((data) => {
            state.data = data;
          });
      }
    });

    return {
      username,
      option,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.soft {
  padding: var(--gd-spacing-md) var(--gd-spacing-md);
  border-radius: var(--gd-radius-md);
  background: var(--gd-bg);
  box-shadow: 20px 20px 60px var(--gd-shadow-dark), -20px -20px 60px var(--gd-shadow-light);
  font-size: var(--gd-font-size-base);
  margin-bottom: var(--gd-spacing-md);
}

.neumorphism {
  position: relative;
  transition: transform 0.3s;
  transform: scale(0.96, 1) translateZ(0);
  margin: 16px 0;
}

.label {
  text-transform: uppercase;
  margin-bottom: var(--gd-spacing-sm);
}

input {
  padding: var(--gd-spacing-sm) 12px;
}
</style>
