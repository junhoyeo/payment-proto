<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './scss/normalize.css';
@import './scss/fonts.scss';

h1 {
  margin: 0;
}

a {
  text-decoration: none;
}

input:focus,
button:focus {
  outline: none;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  overflow-y: scroll;

  .page {
    height: max-content;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

@media (min-width: 600px) {
  body {
    display: flex;
    justify-content: center;
    background: #eee;
  }

  #app {
    width: 400px;
  }
}
</style>
