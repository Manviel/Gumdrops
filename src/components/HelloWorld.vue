<template>
  <main class="soft flex">
    <Typography tag="h1" variant="title">Enter user name</Typography>
    <Typography variant="lead">{{ msg }}</Typography>

    <section class="neumorphism flex">
      <label class="label">{{ username }}</label>
      <input type="text" v-model="username" placeholder="Enter..." />
    </section>

    <Button variant="primary" @click="option = username">Submit</Button>
  </main>

  <ol class="soft" v-if="option">
    <li v-for="lib in data" :key="lib.name">
      {{ lib.name }} {{ new Date(lib.updated_at).toDateString() }}
    </li>
  </ol>
</template>

<script>
import { reactive, ref, watchEffect, toRefs } from "vue";
import Button from "../packages/core/src/Button/index.vue";
import Typography from "../packages/core/src/Typography/index.vue";

export default {
  name: "HelloWorld",
  components: { Button, Typography },
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
  padding: 16px 20px;
  border-radius: 8px;
  background: #ecf0f3;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  font-size: 16px;
  margin-bottom: 12px;
}

.neumorphism {
  position: relative;
  transition: transform 0.3s;
  transform: scale(0.96, 1) translateZ(0);
  margin: 16px 0;
}

.label {
  text-transform: uppercase;
  margin-bottom: 8px;
}

.btn {
  background: #e3e6ec;
  box-shadow: 18px 18px 20px #d1d9e6, -18px -18px 20px #ffffff;
  border-radius: 30px;
  padding: 16px 20px;
  border: 0;
  font-size: inherit;
  font-weight: bold;
}

.btn:hover {
  background: #e6e9ef;
  box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #ffffff;
}

input {
  padding: 10px 12px;
}
</style>
