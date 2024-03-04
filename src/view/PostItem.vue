<template>
  <div class="post-item">
    <div class="user-info">
      <router-link
        :to="{ name: 'profileMe' }"
        class="router-link"
        v-if="post && post.userAvatar"
        @click="handleClick"
      >
        <img :src="post.userAvatar" alt="User Avatar" class="user-avatar" />
        <b>{{ post.username }}</b>
      </router-link>
    </div>
    <div class="post-info"></div>
    <img
      v-if="post && post.imageUrl"
      :src="post.imageUrl"
      alt="Post"
      class="post-image"
    />
    <img src="@/assets/하트.png" alt="하트" class="psheart-icon" />
    <img src="@/assets/댓글2.png" alt="댓글" class="pscomment-icon" />
    <img src="@/assets/화살표.png" alt="공유" class="psshare-icon" />
    <img src="@/assets/저장.png" alt="저장" class="pssave-icon" />
    <div class="post-caption" v-if="post && post.caption">
      <router-link to="/view/ProfileMe.vue" class="router-link">
        <b>{{ post.username }}</b></router-link
      >

      &nbsp;{{ post.caption }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    handleClick() {
      this.$emit('username-clicked', this.post.username);
    },
  },
};
</script>

<style scoped>
.post-image {
  width: 430px;
  height: 580px;
  margin-bottom: 40px;
  margin-left: 0px;
}

.post-info {
  padding: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0px;
  margin-bottom: -13px;
}

.user-avatar {
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-bottom: -10px;
}

.post-caption {
  margin-top: 2rem;
  margin-right: 240px;
}

.router-link {
  text-decoration: none; /* 링크에 밑줄 제거 */
  color: inherit; /* 기본 텍스트 색상 사용 */
  cursor: pointer; /* 커서 모양 변경 */
}
.psheart-icon {
  width: 25px;
  height: 25px;
  margin-left: -430px;
  margin-top: -20px;
  margin-right: 20px;
}
.pscomment-icon {
  width: 21px;
  height: 21px;
  margin-right: 20px;
  margin-top: -50px;
  margin-bottom: 2px;
}
.psshare-icon {
  width: 22px;
  height: 22px;
  margin-right: 10px;
  margin-top: -50px;
  margin-bottom: 2px;
}
.pssave-icon {
  width: 21px;
  height: 21px;
  margin-right: 0px;
  margin-left: 290px;
  margin-top: -50px;
  margin-bottom: 2px;
}
</style>
