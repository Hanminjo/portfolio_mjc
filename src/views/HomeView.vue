<template>
  <div>
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
        <swiper-slide style="background-image:url(/portfolio_mjc/d.jpg)" class="slide">
          <div class="header6">CORDING </div>

        </swiper-slide>

      </swiper>
    </div>
    <div id="introduce">
      <div class="header">| ABOUT</div>
      <div class="list1">
        <div class="profile">
          <div class="content">
            <img src="/portfolio_mjc/j.jpg" alt="조한민의 사진" class="profile-image">
            <div class="details">
              <h2 class="name">이름:조한민</h2>
              <p class="college">학교:명지전문대학</p>
              <p class="major">학과:정보통신공학과</p>
              <p class="class">본과:전공심화과정</p>
              <p class="graduation">졸업년도:2024년</p>
              <p class="description"></p>
            </div>
          </div>
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
        <div class="item" @click="movePage('/portfolio1')" style="background-image:url(/portfolio_mjc/car.png)">
          <div class="item-content">
            <h3 class="item-title">Clean RC Car Project</h3>
            <p class="item-description">
              Designed and built an RC car with advanced features, including remote control, autonomous mode, and
              obstacle avoidance.
            </p>
          </div>
        </div>
        <div class="item" @click="movePage('/portfolio2')" style="background-image:url(/portfolio_mjc/AIRFOOTBALL.png)">
          <div class="item-content">
            <h3 class="item-title">AIR FOOTBALL Project</h3>
            <p class="item-description">
              Developed an exciting AIRFOOTBALL game with innovative features, including multiplayer support and
              realistic physics.
            </p>
          </div>
        </div>
        <div class="item" @click="movePage('/portfolio3')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio4')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio5')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio6')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
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
  },
  methods: {
    movePage(path) {
      this.$router.push(path);
    }
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
        color: #441c1c;
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

  .list1 {
    .profile {
      display: flex;
      justify-content: center;
      /* 가로 정렬을 중앙으로 변경 */
      align-items: center;
      flex-direction: column;
      /* 세로 정렬을 중앙으로 변경 */

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .profile-image {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #fff;
      }

      .details {
        flex: 1;
        text-align: left;

        .name {
          font-size: 40px;
          font-weight: bold;
          color: #333;
        }

        .college,
        .major,
        .class,
        .graduation {
          font-size: 30px;
          color: #666;
          margin-bottom: 10px;
        }

        .graduation {
          margin-bottom: 15px;
        }

        .description {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }
      }
    }
  }
}

#archiving {
  background-color: #552b0d;
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

  .GIT {
    font-size: 19px;
    text-align: center;
    font-weight: bold;

    color: #ffffff;
  }
}

#portfolio {
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

  width:1000px;
  margin: 0 auto;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .item {
      position: relative;
      width: 300px;
      height: 300px;
      background-position: center center;
      background-size: cover;
      aspect-ratio: 1/1;
      border-radius: 10px;
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