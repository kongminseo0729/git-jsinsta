<template>
  <div class="menus-bar">
    <div class="menu-item">
      <div class="instagram-title"><h2>Instagram</h2></div>

      <div class="icon-with-text">
        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="@/view/Contents.vue" class="router-link">
            <img src="@/assets/집.png" alt="Home" class="home-icon" />
            <span class="home-text">홈</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/glass" class="router-link">
            <img src="@/assets/돋보기.png" alt="glass" class="glass-icon" />
            <span class="glass-text">검색</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/compass" class="router-link">
            <img
              src="@/assets/나침반2.png"
              alt="compass"
              class="compass-icon"
            />
            <span class="compass-text">탐색 탭</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/video" class="router-link">
            <img src="@/assets/동영상.png" alt="video" class="video-icon" />
            <span class="video-text">릴스</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/dm" class="router-link">
            <img src="@/assets/화살표.png" alt="dm" class="dm-icon" />
            <span class="dm-text">메시지</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/heart" class="router-link">
            <img src="@/assets/하트.png" alt="heart" class="heart-icon" />
            <span class="heart-text">알림</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/plus" class="router-link">
            <img src="@/assets/플러스.png" alt="plus" class="plus-icon" />
            <span class="plus-text">만들기</span>
          </router-link>
        </div>
        <div class="icon-item" style="margin-bottom: 65px">
          <router-link to="/ProfileMe" class="router-link">
            <img
              src="@/assets/프로필사진.jpg"
              alt="profile"
              class="lbprofile-icon"
            />
            <span class="lbprofile-text">프로필</span>
          </router-link>
        </div>

        <div class="icon-item" style="margin-bottom: 10px">
          <router-link to="/thread" class="router-link">
            <img src="@/assets/스레드.png" alt="threads" class="threads-icon" />
            <span class="threads-text">Threads</span>
          </router-link>
        </div>

        <div class="icon-item">
          <router-link to="/three" class="router-link">
            <img src="@/assets/세줄.png" alt="three" class="three-icon" />
            <span class="three-text">더보기</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenusBar',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Playball&family=Protest+Riot&display=swap');
.lbprofile-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.home-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.glass-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.compass-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.video-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.dm-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.heart-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.plus-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.threads-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.three-text {
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;

  text-align: left;
}
.lbprofile-icon {
  width: 30px;
  height: 30px;
  margin-left: -80px;
  border-radius: 50%;
  border: 3px solid #000000; /* 프로필사진 경계 */
}
.home-icon {
  width: 30px;
  height: 30px;
  margin-left: -80px;
}
.glass-icon {
  width: 26px;
  height: 26px;
  margin-left: -80px;
}
.compass-icon {
  width: 26px;
  height: 26px;
  margin-left: -80px;
}
.video-icon {
  width: 33px;
  height: 33px;
  margin-left: -80px;
}
.dm-icon {
  width: 26px;
  height: 26px;
  margin-left: -80px;
}
.heart-icon {
  width: 30px;
  height: 30px;
  margin-left: -80px;
}
.plus-icon {
  width: 28px;
  height: 28px;
  margin-left: -80px;
}
.threads-icon {
  width: 26px;
  height: 26px;
  margin-left: -80px;
}
.three-icon {
  width: 25px;
  height: 25px;
  margin-left: -80px;
}
.menus-bar {
  height: 100vh;
  width: 15%;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 0;
  border-right: 1px solid #ccc;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: all 0.3s ease;
  color: black;
  font-size: 20px;
}

.icon-container {
  display: flex;
  flex-direction: column;
}

.icon-with-text {
  display: flex;
  flex-direction: column;
}

.icon-item {
  display: flex;
  flex-direction: column;

  margin-bottom: -15px;
}

.menus-bar a {
  display: flex;
  border-radius: 20%;
  text-align: center;
  padding: 10px;
  transition: all 0.3s ease;
  color: black;
  font-size: 36px;
}

.menus-bar a:hover {
  background-color: rgb(230, 230, 230);
}

.active {
  background-color: #5eaf13;
}

.instagram-title {
  text-align: left;
  margin: -5px;
  margin-bottom: 10px;
  margin-left: -80px;
  font-family: 'Playball', cursive;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
}
.router-link {
  text-decoration: none; /* 링크에 밑줄 제거 */
  color: inherit; /* 기본 텍스트 색상 사용 */
  cursor: pointer; /* 커서 모양 변경 */
}
</style>
