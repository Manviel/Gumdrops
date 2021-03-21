<template>
  <main class="soft flex">
    <h1>Enter {{ msg }} user name</h1>
    <section class="neumorphism flex">
      <label class="label">{{ username }}</label>
      <input type="text" v-model="username" placeholder="Enter..." />
    </section>
    <button class="btn" @click="option = username">Submit</button>
  </main>

  <ol class="soft" v-if="option">
    <li v-for="lib in data" :key="lib.name">
      {{ lib.name }} {{ new Date(lib.updated_at).toDateString() }}
    </li>
  </ol>
</template>

<script>
import { reactive, ref, watchEffect, toRefs } from "vue";

export default {
  name: "HelloWorld",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
