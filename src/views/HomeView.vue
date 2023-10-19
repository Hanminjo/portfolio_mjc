<template>
  <div>
    <div id="top">
      <swiper class="swiper" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide style="background-image:url(/portfolio_mjc/k.jpg)" class="slide">

          <div class="header1"> |Portfolio</div>
          <div class="header2">Myongji College </div>
          <div class="header3">Department of Information and Communication Engineering</div>

          <div class="header4">Hanmin Jo </div>

        </swiper-slide>
        <swiper-slide style="background-image:url(/portfolio_mjc/top.1.jpg)" class="slide">
          <div class="header">PROGRAMING</div>
        </swiper-slide>
        <swiper-slide style="background-image:url(/portfolio_mjc/d.jpg)" class="slide">
          <div class="header">CORDING </div>

        </swiper-slide>

      </swiper>
    </div>
    <div id="introduce">
      <div class="header">| INTRODUCE</div>
      <div class="list1">
        <div class="profile">
          <img src="/portfolio_mjc/j.jpg" alt="조한민의 사진" class="profile-image">
          <div class="details">
            <h2 class="name">조한민</h2>
            <p class="college">명지전문대학</p>
            <p class="major">정보통신공학과</p>
            <p class="class">전공심화과정</p>
            <p class="graduation">졸업 예정 (2024년)</p>
            <p class="description">

            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="portfolio">
      <div class="header">|PORTFOLIO</div>
      <div class="list">
        <div class="item" @click="movePage('/portfolio1')" style="background-image:url(/portfolio_mjc/car.png)"></div>
        <div class="item" @click="movePage('/portfolio2')" style="background-image:url(/portfolio_mjc/AIRFOOTBALL.png)">
        </div>
        <div class="item" @click="movePage('/portfolio3')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio4')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio5')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
        <div class="item" @click="movePage('/portfolio6')" style="background-image:url(/portfolio_mjc/top.1.jpg)"></div>
      </div>
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
#top {
  height: 100vh;

  .swiper {
    height: 100vh;

    .slide {
      background-position: center center;
      background-size: cover;

      .header {
        font-size: 160px;
        font-weight: bold;
        text-transform: uppercase;
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header1 {
        font-size: 160px;
        font-weight: bold;
        text-transform: uppercase;
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header2 {
        font-size: 65px;
        font-weight: bold;
        text-transform: uppercase;
        /* 대문자로 변환 */
        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header3 {
        font-size: 40px;
        font-weight: bold;

        color: #ffffff;
        /* 적절한 색상 선택 */

      }

      .header4 {
        font-size: 150px;
        font-weight: bold;

        color: #ffffff;
        /* 적절한 색상 선택 */

      }
    }
  }
}



#introduce {
  background-color: #f8f8f8;
  /* 배경색 설정 */
  padding: 50px 0;
  /* 위아래 패딩 조절 */
  text-align: center;

  .header {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    /* 대문자로 변환 */
    color: #2e3c4e;
    /* 적절한 색상 선택 */

  }




  .list1 {

    .item {
      .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin-right: 20px;
          object-fit: cover;
          border: 2px solid #fff;
          /* 테두리 추가 */
        }

        .details {
          text-align: left;

          .name {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }

          .college {
            color: #666;
            margin-bottom: 10px;

          }

          .major {
            color: #666;
            margin-bottom: 10px;
          }

          .class {
            color: #666;
            margin-bottom: 10px;
          }

          .graduation {
            color: #666;
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
}

#portfolio {
  .header {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    /* 대문자로 변환 */
    color: #2e3c4e;
    /* 적절한 색상 선택 */

  }


  width:1000px;
  margin: 0 auto;

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .item {
      width: 300px;
      height: 300px;
      /* 같은 크기로 설정 */
      background-position: center center;
      background-size: cover;
      aspect-ratio: 1/1;
      border-radius: 10px;
      transition: transform 0.3s ease;
      /* 호버 효과를 위한 애니메이션 */
    }

    .item:hover {
      transform: scale(1.1);
      /* 호버 시 확대 효과 */
    }
  }
}
</style>
