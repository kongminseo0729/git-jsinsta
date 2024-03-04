<template>
  <div class="menu-bar">
    <router-link to="./view/ProfileMe.vue" class="router-link">
      <img src="@/assets/프로필사진.jpg" alt="profile" class="profile-icon" />
      <b class="profile-text">konkonnii</b>
    </router-link>
    <b class="text-pro">회원님을 위한 추천 </b>
    <span class="text-minseo">공민서</span>
    <b class="text-every">모두보기 </b>
    <span class="text-last"
      >소개 . 도움말 . 홍보 센터 . API . 채용 정보.<br />
      개인정보처리방침 . 약관. 위치 . 언어 Meta Verified<br /><br />
      © 2024 INSTAGRAM FROM META</span
    >
  </div>
</template>

<style scoped>
.menu-bar {
  position: fixed;
  height: 100vh;
  width: 28%;
  top: 0;
  right: 0;
  background-color: #ffffff;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.router-link {
  display: flex;
  align-items: center;
  text-decoration: none; /* 링크에 밑줄 제거 */
  color: inherit; /* 기본 텍스트 색상 사용 */
  cursor: pointer; /* 커서 모양 변경 */
}

.profile-text {
  margin-left: -5px;
  font-size: 14px;
  margin-top: 20px;
}

.profile-icon {
  width: 45px;
  height: 45px;
  margin-top: 40px;
  margin-right: 20px;
}
.text-pro {
  font-size: 14px;
  margin-top: 10px;
  margin-right: 270px;
}
.text-every {
  font-size: 12px;
  margin-top: 15px;
  margin-right: -80px;
}
.text-minseo {
  font-size: 14px;
  margin-top: -83px;
  margin-right: 255px;
}
.text-last {
  font-size: 12px;
  margin-top: 330px;
  margin-right: 275px;
  white-space: nowrap;
  color: #c2bbb9e4;
}
</style>
