<template>
  <div class="username">
    <div class="profile">
      <img
        src="@/assets/프로필사진.jpg"
        alt="프로필 사진"
        class="profile-picture"
      />
    </div>
    <div class="info">
      <span>{{ username }}</span>
      <button class="button1" @click="handleButtonClick1">
        <b>프로필 편집</b>
      </button>
      <button class="button2" @click="handleButtonClick2">
        <b>보관된 스토리 보기</b></button
      ><img src="@/assets/설정.png" alt="설정" class="wheel-icon" />

      <div class="labels">
        <span class="board">게시물</span>
        <span class="follower">팔로워</span>
        <span class="follow">팔로우</span>
      </div>
      <span class="name"><b>공민서</b></span>
      <span class="introduce"
        ><b>안녕하세요 민서의 인스타그램 입니다 ❤️</b></span
      >
      <img src="@/assets/핑크.jpg" alt="하이라이트" class="highlight-icon" />
      <img src="@/assets/핑크.jpg" alt="하이라이트" class="highlight-icon2" />
      <img
        src="@/assets/하이라이트플러스.png"
        alt="하이라이트"
        class="highlightplus-icon"
      />
      <span class="highlight-text">🩷</span>
      <span class="highlight-text2">🌸</span>
      <span class="highlight-text3"><b>신규</b></span>
      <div class="profileborder"></div>

      <button
        ref="button3"
        :class="{ button3: true, clicked: activeButton === 'button3' }"
        @click="handleButtonClick3"
      >
        <img
          src="@/assets/게시물.png"
          alt="게시물"
          class="board-icon"
        />&nbsp;&nbsp;<b>게시물</b>
      </button>
      <button
        ref="button4"
        :class="{ button4: true, clicked: activeButton === 'button4' }"
        @click="handleButtonClick4"
      >
        <img
          src="@/assets/동영상.png"
          alt="동영상"
          class="reels-icon"
        />&nbsp;&nbsp;<b>릴스</b>
      </button>
      <button
        ref="button5"
        :class="{ button5: true, clicked: activeButton === 'button5' }"
        @click="handleButtonClick5"
      >
        <img
          src="@/assets/저장.png"
          alt="저장"
          class="save2-icon"
        />&nbsp;&nbsp;<b>저장됨</b>
      </button>
      <button
        ref="button6"
        :class="{ button6: true, clicked: activeButton === 'button6' }"
        @click="handleButtonClick6"
      >
        <img
          src="@/assets/태그.png"
          alt="태그"
          class="tag-icon"
        />&nbsp;&nbsp;<b>태그됨</b>
      </button>
    </div>
  </div>
  <LeftSidebar />
</template>

<script>
import LeftSidebar from '@/view/LeftSideBar.vue';
export default {
  data() {
    return {
      username: 'konkonnii',
      activeButton: null,
    };
  },
  methods: {
    handleButtonClick1() {
      // 버튼 1을 클릭했을 때 수행할 동작
      console.log('버튼 1 클릭');
    },
    handleButtonClick2() {
      // 버튼 2를 클릭했을 때 수행할 동작
      console.log('버튼 2 클릭');
    },
    handleButtonClick3() {
      console.log('버튼 3 클릭');
      this.toggleButton('button3');
    },
    handleButtonClick4() {
      console.log('버튼 4 클릭');
      this.toggleButton('button4');
    },
    handleButtonClick5() {
      console.log('버튼 5 클릭');
      this.toggleButton('button5');
    },
    handleButtonClick6() {
      console.log('버튼 6 클릭');
      this.toggleButton('button6');
    },
    toggleButton(buttonName) {
      // 현재 클릭된 버튼이면 해제, 아니면 클릭
      this.activeButton = this.activeButton === buttonName ? null : buttonName;
    },
  },
  name: 'PostContents',
  components: {
    LeftSidebar,
  },
};
</script>

<style scoped>
.button3.clicked,
.button4.clicked,
.button5.clicked,
.button6.clicked {
  color: #000000; /* 클릭 시 글자색을 흰색으로 변경 */
}

.button3.clicked ~ .info .profileborder,
.button4.clicked ~ .info .profileborder,
.button5.clicked ~ .info .profileborder,
.button6.clicked ~ .info .profileborder {
  border-bottom: 3px solid #000; /* 클릭 시 바(border)를 두껍게 설정 */
}
.profile {
  margin-right: 10px;
}

.profile-picture {
  width: 155px; /* 프로필 사진의 크기 조절 */
  height: 155px;
  border-radius: 50%; /* 프로필 사진을 동그랗게 만들기 */
  margin-right: 100px;
  margin-left: 230px;
  margin-top: -130px;
  margin-bottom: 200px;
  border: 3px solid #e4e4e4; /* 프로필사진 경계 */
}

.info {
  display: flex;
}

.username {
  font-size: 21px;
  margin-top: -90px;
  margin-left: 240px;

  display: flex;
  align-items: center;
}

.button1,
.button2 {
  margin-top: 0px;
  margin-bottom: 480px;
  margin-left: 30px;
  cursor: pointer;
  font-size: 15px;
  border: none; /* 테두리 없애기 */
  padding: 6px 12px; /* 내부 여백 제거 */
  border-radius: 8px;
}

.button1 {
  margin-left: 23px;
  margin-right: -20px;
}

.button2 {
  margin-right: 15px;
}

.wheel-icon {
  width: 23px;
  height: 23px;
  margin-top: 0px;
}

.labels {
  display: flex;
  margin-left: -410px;
  margin-top: 50px;
  font-size: 16px;
}
.board {
  margin-right: 60px;
}

.follower {
  margin-right: 60px;
}

.follow {
  margin-right: 60px;
}

.name {
  font-size: 14px;
  margin-top: 100px;
  margin-left: -320px;
}
.introduce {
  font-size: 11px;
  margin-top: 130px;
  margin-left: -40px;
}
.highlight-icon {
  width: 75px;
  height: 75px;
  margin-top: 230px;
  border-radius: 50%;
  border: 3px solid #e4e4e4;
  margin-left: -380px;
  margin-right: 100px;
}
.highlight-icon2 {
  width: 75px;
  height: 75px;
  margin-top: 230px;
  border-radius: 50%;
  border: 3px solid #e4e4e4;
  margin-left: -330px;
}
.highlightplus-icon {
  width: 75px;
  height: 75px;
  margin-top: 230px;
  border-radius: 50%;
  border: 3px solid #e4e4e4;
  margin-left: 220px;
}
.highlight-text {
  font-size: 13px;
  margin-top: 315px;
  margin-left: -350px;
}

.highlight-text2 {
  font-size: 14px;
  margin-top: 315px;
  margin-left: 132px;
}
.highlight-text3 {
  font-size: 12px;
  margin-top: 315px;
  margin-left: 130px;
}
.profileborder {
  position: absolute;
  margin-top: 400px;
  left: 55%;
  transform: translateX(-50%);
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  width: 60%;
}

.board-icon {
  width: 12px;
  height: 12px;
}
.button3 {
  font-size: 12px;
  margin-top: 420px;
  margin-left: -150px;
  background-color: #fff; /* 바탕색을 하양색으로 설정 */
  border: none; /* 테두리 없애기 */
  margin-right: 60px;
  margin-bottom: 40px;
}
.reels-icon {
  width: 17px;
  height: 17px;
}
.button4 {
  font-size: 12px;
  margin-top: 420px;
  margin-left: 0px;
  background-color: #fff; /* 바탕색을 하양색으로 설정 */
  border: none; /* 테두리 없애기 */
  margin-right: 60px;
  margin-bottom: 40px;
}

.save2-icon {
  width: 15px;
  height: 15px;
}
.button5 {
  font-size: 12px;
  margin-top: 420px;
  margin-left: 0px;
  background-color: #fff; /* 바탕색을 하양색으로 설정 */
  border: none; /* 테두리 없애기 */
  margin-right: 60px;
  margin-bottom: 40px;
}
.tag-icon {
  width: 15px;
  height: 15px;
}
.button6 {
  font-size: 12px;
  margin-top: 420px;
  margin-left: 0px;
  background-color: #fff; /* 바탕색을 하양색으로 설정 */
  border: none; /* 테두리 없애기 */
  margin-right: 60px;
  margin-bottom: 40px;
}
.button3,
.button4,
.button5,
.button6 {
  color: #808080; /* 평소에는 회색으로 설정 */
}
</style>
