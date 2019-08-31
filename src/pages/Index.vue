<script>
import { term } from '../meta.json';

export default {
  name: 'index',
  data() {
    return {
      product: '',
      price: 0,
      level: 0,
      checked: false,
      term,
    };
  },
  mounted() {
    this.product = this.$route.params.product;
    this.price = Number(this.$route.params.price);
  },
  methods: {
    onClickNext() {
      if (this.level === 2) {
        window.close();
        return;
      }
      if (this.checked) this.level += 1;
    },
  },
};
</script>

<template>
  <div class="index">
    <div ref="container" class="index__container">
      <div class="index__tabs">
        <span class="index__tab">간편결제</span>
        <span class="index__tab">신용카드</span>
      </div>
      <div class="index__wrap">
        <h1 class="index__title">
          <i class="fas fa-caret-right"></i> 수시레시피 결제
        </h1>
        <span class="index__brand">INUDEVS</span>
        <div class="index__form">
          <div class="index__row">
            <span>금액</span>
            <span>
              <span class="index__price">{{ price.toLocaleString() }}</span>원
            </span>
          </div>
          <div class="index__row">
            <span>상품명</span>
            <span class="index__product">{{ product }}</span>
          </div>
          <div class="index__row">
            <span>제공업체</span>
            <span>수시레시피 X INU</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index__agree" v-if="level === 0">
      <h1 class="index__agree-title">
        <span>1단계</span>
        이용약관 동의
      </h1>
      <div class="index__agree-list">
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>전자금융거래 기본약관</span>
        </div>
        <textarea class="index__agree-term" disabled v-model="term">
        </textarea>
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>고유식별정보 수집 및 이용 동의</span>
        </div>
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>개인정보 수집 및 이용 동의</span>
        </div>
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>개인정보의 제 3자 제공 동의</span>
        </div>
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>개인정보의 취급 위탁 동의</span>
        </div>
        <div class="index__agree-all" @click="checked = !checked">
          <input type="checkbox" :checked="checked" />
          <span>모두 동의하기</span>
        </div>
      </div>
    </div>
    <div class="index__second" v-if="level === 1">
      <h1 class="index__second-title">
        <span>2단계</span>
        카드 선택
      </h1>
      <div class="index__cards">
        <img class="index__card" :src="require('../assets/card.png')" />
        <select class="index__select">
          <option>SW은행 - 테스트</option>
        </select>
        <div class="index__table">
          <div class="index__table-row">
            <span>은행</span>
            <span>SW은행</span>
          </div>
          <div class="index__table-row">
            <span>카드번호</span>
            <span>4000-20**-****-0000</span>
          </div>
          <div class="index__table-row">
            <span>CVC</span>
            <span>2**</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index__second" v-if="level === 2">
      <h1 class="index__second-title">
        <span>3단계</span>
        결제 완료
      </h1>
      <div class="index__bye">결제가 완료되었습니다.</div>
      <div class="index__table">
        <div class="index__table-row">
          <span>금액</span>
          <span>{{ price.toLocaleString() }}</span>
        </div>
        <div class="index__table-row">
          <span>상품명</span>
          <span>{{ product }}</span>
        </div>
        <div class="index__table-row">
          <span>결제처</span>
          <span>수시레시피</span>
        </div>
        <div class="index__table-row">
          <span>카드번호</span>
          <span>4000-20**-****-0000</span>
        </div>
      </div>
    </div>
    <div
      ref="button"
      class="index__button"
      :class="{ 'ok' : (checked) }"
      @click="onClickNext()"
    >{{ (level != 2) ? '다음으로' : '닫기' }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/index.scss'
</style>
