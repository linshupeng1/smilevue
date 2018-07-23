<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        <div class="recommend-item">
          <img :src="item.image" width="80%" alt="">
          <div>{{item.goodsName}}</div>
          <div>￥{{ item.price | moneyFilter }} (￥{{item.mallPrice}})</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {toMoney} from '@/filter/moneyFilter.js'

  export default {
    name: "swiper-default",
    props: ['slide'],
    data() {
      return {
        // slide: [1, 2, 3, 4, 5],
        swiperOption: {
          // direction: 'vertical',
          slidesPerView: 'auto',
          // freeMode: true,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    filters: {
      moneyFilter(money) {
        return toMoney(money)
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>

  .swiper {
    /*height: 20rem;*/
    width: 20rem;
    clear: both;
    overflow: hidden;
  }
  .recommend-item{
    width:99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }

</style>
