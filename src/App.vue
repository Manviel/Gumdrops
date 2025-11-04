<template>
  <div class="flex">
    <nav class="nav">
      <img alt="Vue logo" src="./assets/logo.png" height="100" width="100" />
    </nav>

    <HelloWorld msg="GitHub" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gd-color-text);
  height: 100vh;
  background: var(--gd-bg);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  margin: 12px;
}
</style>
