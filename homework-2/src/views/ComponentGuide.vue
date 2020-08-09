<template>
  <div>
    <div class="layout">
      <header>
        <h1>Components Guidelines</h1>
      </header>
      <nav id="menu">
        <ul>
          <li>
            <a href="#button">button</a>
          </li>
          <li>
            <a href="#input">input</a>
          </li>
          <li>
            <a href="#select">select</a>
          </li>
          <li>
            <a href="#switch">switch</a>
          </li>
        </ul>
      </nav>
      <section id="button">
        <h2>button</h2>
        <kp-button></kp-button>
        <prism>{{ buttonHtml }}</prism>
      </section>
      <section id="input">
        <h2>input</h2>
        <kp-input></kp-input>
        <prism>{{ buttonHtml }}</prism>
      </section>
      <section id="select">
        <h2>select</h2>
        <kp-select></kp-select>
        <prism>{{ buttonHtml }}</prism>
      </section>
      <section id="switch">
        <h2>switch</h2>
        <kp-switch></kp-switch>
        <prism>{{ buttonHtml }}</prism>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonHtml: `<kp-button></kp-button>`
    };
  }
};
</script>

<style lang="scss" scoped>
$guide-button-bg: #191818;
$guide-button-hover-bg: #333;
$guide-button-text: #999;
$guide-border: #ccc;
$guide-heading2: #888;

.layout {
  @include push--auto;
  max-width: 1024px;
  nav {
    margin-top: 50px;
    font-size: 16px;
    background: $guide-button-bg;
    li {
      display: inline-flex;
      width: 25%;
      text-align: center;

      a {
        width: 100%;
        padding: 10px 0;
        color: $guide-button-text;

        &:hover {
          background: $guide-button-hover-bg;
        }
      }
    }
  }

  h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    border-bottom: 1px solid $guide-border;
  }

  h2 {
    padding-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
    color: $guide-heading2;
  }

  section {
    padding: 50px 30px 25px;
    pre {
      padding: 10px;
      font-size: 14px;
    }
  }
}
</style>
