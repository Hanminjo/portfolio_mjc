<template>
  <v-app>
    <v-app-bar app :color="appBarColor" elevate-on-scroll>
      <v-toolbar-title>JHM's PORTFOLIO</v-toolbar-title>

      <!-- ABOUT 버튼 추가 -->
      <v-btn @click="scrollToIntroduce">ABOUT</v-btn>
      <v-btn @click="scrollToArchiving">Archiving</v-btn>
      <v-btn @click="scrollToPortfolio">PROJECT</v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    appBarColor: 'transparent',
  }),
  methods: {
    // 스크롤 이벤트 핸들러
    handleScroll() {
      // Get the scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Update the app bar color based on the scroll position
      this.appBarColor = scrollPosition > 0 ? 'white' : 'brown';
    },

    // ABOUT 버튼 클릭 시 Introduce 섹션으로 스크롤하는 메서드
    scrollToIntroduce() {
      const introduceSection = document.getElementById('introduce');
      if (introduceSection) {
        window.scrollTo({
          top: introduceSection.offsetTop,
          behavior: 'smooth',
        });
      }
    },
    scrollToPortfolio() {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        window.scrollTo({
          top: portfolioSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }, scrollToArchiving() {
      const archivingSection = document.getElementById('archiving');
      if (archivingSection) {
        window.scrollTo({
          top: archivingSection.offsetTop,
          behavior: 'smooth',
        });
      }
    },
  },
  mounted() {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 스크롤 이벤트 리스너 제거
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
