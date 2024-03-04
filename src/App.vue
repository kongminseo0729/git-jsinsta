<template>
  <div class="app">
    <div class="toggle-button" @click="toggleView">
      <b>{{ showPostList ? 'username' : null }}</b>
    </div>
    <InstaBody v-if="showPostList" />
    <ProfileMe v-else />
    <router-view />
  </div>
</template>

<script>
import InstaBody from './view/InstaBody.vue';
import ProfileMe from './view/ProfileMe.vue';

export default {
  name: 'App',
  components: {
    InstaBody,
    ProfileMe,
  },
  data() {
    return {
      showPostList: true,
    };
  },
  methods: {
    toggleView() {
      this.showPostList = !this.showPostList;
    },
  },
};
</script>

<style>
.app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}

.toggle-button {
  cursor: pointer;
  margin-top: 10px;
}
</style>
