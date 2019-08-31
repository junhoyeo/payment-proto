<script>
/* eslint-disable */
export default {
  name: 'index',
  data() {
    return {
      product: '',
      price: 0,
      level: 0,
      checked: false,
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
      if (this.checked)
        this.level += 1;
    },
  }
};
</script>

<template>
  <div class="index">
    <div
      ref="container"
      class="index__container"
    >
      <div class="index__tabs">
        <span class="index__tab">
          간편결제
        </span>
        <span class="index__tab">
          신용카드
        </span>
      </div>
      <div class="index__wrap">
        <h1 class="index__title">
          <i class="fas fa-caret-right"></i> 수시레시피 결제
        </h1>
        <span class="index__brand">
          INUDEVS
        </span>
        <div class="index__form">
          <div class="index__row">
            <span>
              금액
            </span>
            <span>
              <span class="index__price">{{ price.toLocaleString() }}</span>원
            </span>
          </div>
          <div class="index__row">
            <span>
              상품명
            </span>
            <span class="index__product">
              {{ product }}
            </span>
          </div>
          <div class="index__row">
            <span>
              제공업체
            </span>
            <span>
              수시레시피 X INU
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="index__agree"
      v-if="level === 0"
    >
      <h1 class="index__agree-title">
        <span>1단계</span>
        이용약관 동의
      </h1>
      <div class="index__agree-list">
        <div class="index__agree-item">
          <input type="checkbox" :checked="checked" />
          <span>전자금융거래 기본약관</span>
        </div>
        <textarea class="index__agree-term" disabled>
제1조(목적) 이 약관은 SW은행(이하 “은행”이라 합니다.)과 이용자 사이의 전자금융거래에 관한 기본적인 사항을 정함으로써, 거래의 신속하고 효율적인 처리를 도모하고 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 목적으로 합니다.

제2조(용어의 정의)

① 이 약관에서 사용하는 용어의 의미는 다음 각 호와 같습니다.

 1. “전자금융거래”라 함은 은행이 전자적 장치를 통하여 제공하는 금융상품 및 서비스를 이용자가 전자적 장치를 통하여 비대면·자동화된 방식으로 직접 이용하는 거래를 말합니다.

 2. “이용자”라 함은 전자금융거래를 위하여 은행과 체결한 계약(이하 "전자금융거래계약"이라 합니다.)에 따라 전자금융거래를 이용하는 고객을 말합니다.
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
        <div
          class="index__agree-all"
          @click="checked = !checked"
        >
          <input type="checkbox" :checked="checked" />
          <span>모두 동의하기</span>
        </div>
      </div>
    </div>
    <div
      class="index__second"
      v-if="level === 1"
    >
      <h1 class="index__second-title">
        <span>2단계</span>
        카드 선택
      </h1>
      <div class="index__cards">
        <img
          class="index__card"
          :src="require('../assets/card.png')"
        />
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
    <div
      class="index__second"
      v-if="level === 2"
    >
      <h1 class="index__second-title">
        <span>3단계</span>
        결제 완료
      </h1>
      <div class="index__bye">
        결제가 완료되었습니다.
      </div>
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
    >
      {{ (level != 2) ? '다음으로' : '닫기' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {
  height: 100%;
  background-color: white;
  padding-bottom: 2rem;

  &__container {
    color: white;
    background: linear-gradient(to right, #0575e6, #021b79);
    padding-bottom: 1rem;
  }

  &__tabs {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.2rem;
  }

  &__tab {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    cursor: pointer;

    &:first-child {
      background-color: white;
      color: black;
    }
  }

  &__title {
    font-size: 1.5rem;
    margin-left: 1rem;
    margin-bottom: 0.8rem;
    font-weight: 700;

    i {
      margin-right: 0.5rem;
    }
  }

  &__form {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.3rem;
    font-weight: 300;

    // &:last-child {
    //   font-size: 80%;
    // }
  }

  &__price {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  &__product {
    font-weight: 400;
  }

  &__wrap {
    position: relative;
  }

  &__brand {
    position: absolute;
    top: 0;
    right: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 255, 255, 0.5);
  }

  &__agree,
  &__second {
    margin: 0.5rem 0.8rem;
  }

  &__agree-title,
  &__second-title {
    font-size: 1.5rem;

    span {
      font-size: 1rem;
      font-weight: 400;
      padding: 0.1rem 0.3rem;
      border-radius: 8px;
      // border: 1px solid #021b79;
      background-color: #021b79;
      color: white;
    }
  }

  &__agree-list {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
  }

  &__agree-item,
  &__agree-all {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;

    span {
      margin-left: 0.5rem;
      font-weight: 400;
    }
  }

  &__agree-all {
    color: #021b79;

    span {
      font-weight: 700;
    }
  }

  textarea {
    width: 99%;
    height: 5rem;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    resize: none;
    border: 1px solid #0575e6;
  }

  &__button {
    cursor: not-allowed;
    border-radius: 8px;
    color: white;
    background-color: #ccc;
    // position: absolute;
    // bottom: 0;
    float: right;
    margin-right: 0.8rem;
    width: fit-content;
    padding: 0.5rem;

    &.ok {
      background-color: #0575e6;
      cursor: pointer;
    }
  }

  &__cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.5rem;
    text-align: center;
  }

  &__card {
    width: 80%;
    margin: auto;
  }

  &__select {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
  }

  &__table {
    border: 1px solid #0575e6;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    margin-top: 0.5rem;
    text-align: left;
  }

  &__table-row {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.3rem;
    font-weight: 400;

    span:first-child {
      color: #0575e6;
    }

    span:last-child {
      color: #021b79;
    }
  }

  &__bye {
    font-size: 1.3rem;
    color: #0575e6;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
