<template>
  <div class="header">
    <div class="logo-container">
      <router-link :to="{ name: 'Home' }">
        <div class="logo">
          <img :src="require('../assets/logo.png')" alt="">
        </div>
      </router-link>
    </div>
    <div class="user-info">
      <a href="https://github.com/xp10it" target="_blank">
        <img
          class="user-photo"
          width="40px"
          height="40px"
          :src="require('../assets/profile-photo.jpg')"
          alt="profile photo"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {},
};
</script>

<style scoped>
.header {
  height: 100vh;
  width: 103px;
  background-color: #1e2139;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
}
.logo-container {
  width: 100%;
  height: 103px;
  background-color: #7b5cfa;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 40px;
  height: 40px;
  position: relative;
  background-color: white;
  border-radius: 50%;
}
.logo img {
  width: 100%;
  height: 100%;
  background-color: #7b5cfa;
}
.user-info {
  width: 100%;
  height: 90px;
  border-top: 1px solid rgb(73, 79, 110);
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-photo {
  border-radius: 50%;
  border: 2px solid #fff
}

@media screen and (max-width: 1024px) {
  .header {
    height: 80px;
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0;
  }
  .logo-container {
    width: 80px;
    height: 100%;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
  .logo {
    width: 30px;
    height: 30px;
    position: relative;
    background-color: white;
    border-radius: 50%;
  }
  .user-info {
    width: 90px;
    height: 100%;
    border-left: 1px solid rgb(73, 79, 110);
    border-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
