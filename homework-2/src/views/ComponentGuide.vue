<template>
  <div>
    <div class="layout">
      <header>
        <h1>Components Guidelines</h1>
      </header>

      <section id="button">
        <h2>button</h2>
        <h3>default button</h3>
        <div>
          <kp-button>
            <span>button</span>
          </kp-button>
          <prism class="m-t-10 m-b-20">{{ buttonDefault }}</prism>
        </div>

        <h3>primary button</h3>
        <div>
          <kp-button type="primary">
            <span>primary button</span>
          </kp-button>
          <prism class="m-t-10">{{ buttonPrimary }}</prism>
        </div>
      </section>
      <section id="input">
        <h2>input</h2>
        <h3>text</h3>
        <kp-input placeholder="text" />
        <prism class="m-t-10 m-b-20">{{ inputText }}</prism>

        <h3>password</h3>
        <kp-input placeholder="password" is-password />
        <prism class="m-t-10">{{ passwordText }}</prism>
      </section>
      <section id="radio">
        <h2>radio</h2>
        <kp-radio></kp-radio>
        <prism class="m-t-10">{{ radioButton }}</prism>
      </section>
      <section id="select">
        <h2>select</h2>
        <kp-select>
          <option>option</option>
        </kp-select>
        <prism class="m-t-10">{{ select }}</prism>
      </section>
      <section id="switch">
        <h2>switch</h2>
        <kp-switch></kp-switch>
        <prism class="m-t-10 m-b-50">{{ switchCheck }}</prism>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonDefault: `<kp-button>
  <span>button</span>
</kp-button>`,
      buttonPrimary: `<kp-button type="primary">
  <span>button</span>
</kp-button>`,
      inputText: `<kp-input placeholder="text" /> `,
      passwordText: `<kp-input placeholder="password" is-password /> `,
      radioButton: `<kp-radio  /> `,
      select: `<kp-select>
  <option>option</option>
</kp-select> `,
      switchCheck: `<kp-switch  /> `
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
$guide-heading3: #4b4b4b;

.layout {
  @include push--auto;
  max-width: 1024px;
  nav {
    margin-top: 50px;
    font-size: 16px;
    background: $guide-button-bg;
    li {
      display: inline-flex;
      width: 20%;
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

  h3 {
    font-size: 20px;
    padding-bottom: 10px;
    color: $guide-heading3;
  }

  section {
    padding: 50px 30px 0;
    pre {
      padding: 10px;
      font-size: 14px;
    }
  }
}
</style>
