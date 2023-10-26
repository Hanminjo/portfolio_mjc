<template>
  <div>
    <v-app-bar app :color="appBarColor" elevate-on-scroll>
      <v-toolbar-title class="text1" @click="scrollToTop">JHM's PORTFOLIO</v-toolbar-title>
      <v-btn class="text2" @click="scrollToIntroduce">ABOUT</v-btn>
      <v-btn class="text5" @click="scrollToSkills">SKILLS</v-btn>
      <v-btn class="text3" @click="scrollToArchiving">Archiving</v-btn>
      <v-btn class="text4" @click="scrollToPortfolio">PROJECT</v-btn>

    </v-app-bar>
    <div id="top">
      <swiper class="swiper" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="background-image:url(/portfolio_mjc/background.jpg)" class="slide">

          <div class="header1"> Portfolio</div>

          <div class="header0">----------</div>

          <div class="header2">Hanmin Jo </div>


        </swiper-slide>
        <swiper-slide style="background-image:url(/portfolio_mjc/top.1.jpg)" class="slide">
          <div class="header5">PROGRAMING</div>
        </swiper-slide>
        <swiper-slide style="background-image:url(/portfolio_mjc/v.jpg)" class="slide">
          <div class="header6">CORDING </div>

        </swiper-slide>

      </swiper>
    </div>
    <div id="introduce">
      <div class="header">| ABOUT</div>

      <div class="list">
        <img src="/portfolio_mjc/j.jpg" alt="조한민의 사진" class="profile-image">
        <div class="details">
          <div class="top">
            <img class="a" src="/portfolio_mjc/a.png">

            <span class="spacer1"></span>
            <img class="a" src="/portfolio_mjc/q.png">

            <span class="spacer1"></span>
            <img class="a" src="/portfolio_mjc/f.png">


          </div>

          <div class="top2">
            <span class="name2"> 조한민 </span>
            <span class="spacer2"></span>
            <span class="birth2">00.01.19 </span>
            <span class="spacer2"></span>
            <span class="home2">고양시 덕양구 </span>
          </div>
          <div class="mid">
            <img class="a" src="/portfolio_mjc/e.png">

            <span class="spacer3"></span>
            <img class="a" src="/portfolio_mjc/z.png">

            <span class="spacer3"></span>
            <img class="a" src="/portfolio_mjc/d.png">

          </div>
          <div class="mid2">
            <span class="number2">01053613826</span>
            <span class="spacer"></span>
            <span class="email2">johanmin@itc.mjc.ac.kr</span>
            <span class="spacer"></span>
            <span class="school2">명지전문대학</span>
          </div>
        </div>
      </div>

    </div>
    <div id="skills">
      <div class="header">| SKILLS</div>
      <div class="list">
        <div class="top1">
          <span class="top"> git </span>
          <span class="spacer2"></span>
          <span class="top">Gitub </span>
          <span class="spacer2"></span>
          <span class="top">HTML</span>
        </div>
        <div class="top1">
          <span class="top"> HTML </span>
          <span class="spacer2"></span>
          <span class="top">CSS </span>
          <span class="spacer2"></span>
          <span class="top">JS</span>
        </div>
        <div class="top1">
          <span class="top"> python </span>
          <span class="spacer2"></span>
          <span class="top">firebase</span>
          <span class="spacer2"></span>
          <span class="top">figma</span>
        </div>
        <div class="top1">
          <span class="top"> vue</span>
          <span class="spacer2"></span>
          <span class="top">vuex</span>
          <span class="spacer2"></span>
          <span class="top">nodejs</span>

        </div>
      </div>
    </div>
    <div id="archiving">
      <div class="header">| ARCHIVING</div>
      <div class="list">
        <div class="content">
          <a href="https://github.com/Hanminjo" target="_blank">
            <img src="/portfolio_mjc/GIT.png" alt="깃" class="profile-image">
            <p class="GIT">Github</p>
          </a>
        </div>
      </div>
    </div>
    <div id="portfolio">
      <div class="header">|PROJECT</div>
      <div class="list">
        <v-carousel class="v">
          <v-carousel-item class="v">
            <div class="item" @click="moveToGitHub('/portfolio1')" style="background-image:url(/portfolio_mjc/car.png)">
              <div class="item-content">
                <h3 class="item-title">Clean RC Car Project</h3>
                <p class="item-description">
                  Designed and built an RC car with advanced features, including remote control, autonomous mode, and
                  obstacle avoidance.
                </p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item class="v">
            <div class="item" @click="moveToGitHub('/portfolio2')"
              style="background-image:url(/portfolio_mjc/AIRFOOTBALL.png)">
              <div class="item-content">
                <h3 class="item-title">AIR FOOTBALL Project</h3>
                <p class="item-description">
                  Developed an exciting AIRFOOTBALL game with innovative features, including multiplayer support and
                  realistic physics.
                </p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item class="v">
            <div class="item" @click="moveToGitHub('/portfolio3')" style="background-image:url(/portfolio_mjc/T.png)">
              <div class="item-content">
                <h3 class="item-title">MBTI Project</h3>
                <p class="item-description">
                  MBTI helps you get to know and understand yourself and others better, so you get closer.
                </p>
              </div>
            </div>
          </v-carousel-item>
          <v-carousel-item class="v">
            <div class="item" @click="moveToGitHub('/portfolio4')" style="background-image:url(/portfolio_mjc/main.png)">
              <div class="item-content">
                <h3 class="item-title">FORTUNE Project</h3>
                <p class="item-description">
                  I made a site where you can read your fortune through a fortune website Today's horoscope is for each
                  week.
                </p>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div class="copyright">
      <p>© 2023. Jo Han Min. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import aos from "aos";

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  data: () => ({
    appBarColor: 'transparent',
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  mounted() {
    aos.init();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 스크롤 이벤트 리스너 제거
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Get the scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Update the app bar color based on the scroll position
      this.appBarColor = scrollPosition > 0 ? 'white' : 'brown';
    },
    scrollToTop() {
      // 맨 위쪽으로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    scrollToSkills() {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        window.scrollTo({
          top: skillsSection.offsetTop,
          behavior: 'smooth',
        });
      }
    },

    movePage(path) {
      this.$router.push(path);
    },
    moveToGitHub(project) {
      // 프로젝트에 따라 다른 GitHub 링크 설정
      const gitHubLinks = {
        '/portfolio1': 'https://github.com/Hanminjo/Cleaning_RC_Car',
        '/portfolio2': 'https://www.notion.so/AIR-FOOTBALL-b3d65de7670e4ca3b73931de638b193c',
        '/portfolio3': 'https://github.com/Hanminjo/MBTI',
        '/portfolio4': 'https://github.com/ehddk/TryFortune/tree/JOHANMIN',
        // 프로젝트에 맞게 변경
        // 다른 프로젝트에 대한 GitHub 링크도 추가할 수 있어
      };

      // 지정된 프로젝트의 GitHub 링크로 이동
      window.location.href = gitHubLinks[project];
    },
  },
  name: 'HomeView',
});
</script>
<style lang="less">
.copyright {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
}

.github-link {
  text-align: center;
  margin-top: 10px;
}

.github-link a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.github-link a:hover {
  text-decoration: underline;
}

#top {
  height: 100vh;

  .swiper {
    height: 100vh;

    .slide {
      background-position: center center;
      background-size: cover;
      opacity: 0.8;

      .header5 {
        font-size: 160px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header6 {
        font-size: 160px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header1,
      .header2,
      .header3,
      .header4,
      .header5,
      .header6 {
        position: relative;
        font: 160px bold uppercase #ffffff;


      }

      .header0 {

        font-size: 50px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header1 {

        font-size: 190px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header0:hover,
      .header1:hover,
      .header2:hover,
      .header5:hover,
      .header6:hover {
        color: #6c3131;
        /* 마우스를 올렸을 때 색상 변경 */
      }

      .header2 {
        font-size: 165px;
        font-weight: bold;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        color: #ffffff;
        /* 적절한 색상 선택 */

      }
    }
  }
}



#introduce {
  background-color: #ffffff;
  padding: 50px 0;
  text-align: center;

  .header {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
  }

  .list {
    .profile-image {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #fff;
    }

    .details {
      .a {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #fff;
      }

      .spacer {
        margin: 83px;
        /* 필요에 따라 조절하세요. */
      }

      .spacer1 {
        margin: 135px;
        /* 필요에 따라 조절하세요. */
      }

      .spacer2 {
        margin: 111px;
        /* 필요에 따라 조절하세요. */
      }

      .spacer3 {
        margin: 135px;
        /* 필요에 따라 조절하세요. */
      }

      .name2 {
        margin-left: 33px;
      }

      .name,
      .birth,
      .home,
      .number,
      .email,
      .school {

        font-size: 30px;
        color: #000000;
        margin-bottom: 10px;
      }

      .birth2 {
        margin-left: 30px;
      }

      .name2,
      .birth2,
      .home2,
      .number2,
      .email2,
      .school2 {

        font-size: 21px;
        color: #000000;
        margin-bottom: 15px;
      }

    }

  }
}

#skills {
  background-color: #e99c30;
  padding: 50px 0;
  text-align: center;

  .header {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
  }

  .list {

    .spacer2 {
      margin: 111px;
      /* 필요에 따라 조절하세요. */
    }

    .top {

      font-size: 40px;
      color: #ffffff;
      margin-bottom: 15px;

    }

    .top:hover {
      transform: scale(1.1);
    }

  }


}

#archiving {
  background-color: #000000;
  padding: 50px 0;
  text-align: center;

  .header {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: #ffffff;
  }

  .profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
  }

  .profile-image:hover {
    transform: scale(1.1);


  }

  .GIT {
    font-size: 19px;
    text-align: center;
    font-weight: bold;

    color: #ffffff;
  }
}

#portfolio {
  background-color: #b16611;
  padding: 50px 0;


  .header {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 455px;
    color: #ffffff;
  }

  width:2000px;
  margin: 0 auto;

  .list {

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;


    .v {
      max-width: 384px;
      max-height: 384px;
      margin-left: 580px;
      border-radius: 30px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    }

    .v:hover {
      transform: scale(1.1);


    }

    .item {

      width: 384px;
      height: 384px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
      background-position: center center;
      background-size: cover;
      aspect-ratio: 1/1;
      border-radius: 30px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);

        .item-content {
          opacity: 1;
        }
      }

      .item-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.7);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        color: #fff;
        opacity: 0;
        transition: opacity 0.3s ease;

      }

      .item-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .item-description {
        font-size: 14px;
      }
    }
  }
}
</style>