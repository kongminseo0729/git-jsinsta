<template>
  <div class="post-list">
    <PostItem
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      class="post-item"
      @username-clicked="showProfileMe"
    />
    <ProfileMe
      v-if="displayProfileMe"
      @close-profile="closeProfileMe"
      :username="selectedUsername"
    />
  </div>
</template>

<script>
import PostItem from '@/view/PostItem.vue';
import ProfileMe from '@/view/ProfileMe.vue';

export default {
  data() {
    return {
      posts: [
        {
          imageUrl: require('@/assets/바다2.jpg'),
          userAvatar: require('@/assets/프로필사진.jpg'),
          username: 'konkonnii',
          caption: '바다 이쁘다 🌊',
        },

        {
          imageUrl: require('@/assets/회.jpg'),
          userAvatar: require('@/assets/프로필사진.jpg'),
          username: 'konkonnii',
          caption: '회 또 먹고싶다 ',
        },
        {
          imageUrl: require('@/assets/무드등.jpg'),
          userAvatar: require('@/assets/마멜.jpg'),
          username: 'minseo0506',
          caption: '갖고싶다 ㅜㅜ',
        },
      ],
      displayProfileMe: false,
      selectedUsername: null,
    };
  },
  methods: {
    showProfileMe(username) {
      this.selectedUsername = username;
      this.displayProfileMe = true;
    },
    closeProfileMe() {
      this.displayProfileMe = false;
    },
  },
  components: {
    PostItem,
    ProfileMe,
  },
};
</script>

<style scoped>
.post-list {
  z-index: 1;
  gap: 1rem;
  width: 40%;
  margin: 0 auto;
  margin-left: 400px;
}
.post-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
  width: 75%;
  margin-right: 30px;
}
</style>
