<template>
  <div class="regist-wrap">
    <h1>회원가입</h1>
    <fieldset>
      <legend>회원가입</legend>
      <form>
        <div class="p-t-30 p-b-30">
          <div class="m-b-10">
            <kp-input placeholder="아이디" />
          </div>
          <kp-input placeholder="비밀번호" is-password />
        </div>
        <kp-radio class="p-b-25" />
        <div class="p-t-25 p-b-25">
          <dl class="m-b-10 birth">
            <dt>생일</dt>
            <dd>
              <kp-select>
                <option>2000년</option>
                <option>2001년</option>
                <option>2002년</option>
                <option>2003년</option>
                <option>2004년</option>
              </kp-select>
              <kp-select>
                <option value="01">1월</option>
                <option value="02">2월</option>
                <option value="03">3월</option>
                <option value="04">4월</option>
                <option value="05">5월</option>
                <option value="06">6월</option>
                <option value="07">7월</option>
                <option value="08">8월</option>
                <option value="09">9월</option>
                <option value="10">10월</option>
                <option value="11">11월</option>
                <option value="12">12월</option>
              </kp-select>
              <kp-select>
                <option value="01">1일</option>
                <option value="02">2일</option>
                <option value="03">3일</option>
                <option value="04">4일</option>
                <option value="05">5일</option>
                <option value="06">6일</option>
                <option value="07">7일</option>
                <option value="08">8일</option>
                <option value="09">9일</option>
                <option value="10">10일</option>
                <option value="11">11일</option>
                <option value="12">12일</option>
                <option value="13">13일</option>
                <option value="14">14일</option>
                <option value="15">15일</option>
                <option value="16">16일</option>
                <option value="17">17일</option>
                <option value="18">18일</option>
                <option value="19">19일</option>
                <option value="20">20일</option>
                <option value="21">21일</option>
                <option value="22">22일</option>
                <option value="23">23일</option>
                <option value="24">24일</option>
                <option value="25">25일</option>
                <option value="26">26일</option>
                <option value="27">27일</option>
                <option value="28">28일</option>
                <option value="29">29일</option>
                <option value="30">30일ㄴ</option>
              </kp-select>
            </dd>
          </dl>
          <dl class="phone">
            <dt>전화</dt>
            <dd>
              <kp-select>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </kp-select>
              <kp-input />
              <kp-button size="mini">
                <span>인증</span>
              </kp-button>
            </dd>
          </dl>
        </div>
        <div class="p-t-25 p-b-100 agreement">
          <p>모든 약관 내용에 동의합니다.</p>
          <kp-switch></kp-switch>
        </div>
        <kp-button type="primary">
          <span>가입하기</span>
        </kp-button>
      </form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "Regist"
};
</script>

<style lang="scss" scoped>
.regist-wrap {
  font-size: 1.4rem;
  @include push--auto;
  min-width: 360px;
  max-width: 720px;
  padding: 30px 15px;

  .birth,
  .phone,
  .agreement {
    display: flex;
    align-items: center;
  }

  .birth {
    dt {
      width: 40px;
    }
    dd {
      width: calc(100% - 40px);
    }
    .kp-select {
      &:nth-of-type(1) {
        width: calc(40% - 10px);
      }
      &:nth-of-type(2), 
      &:nth-of-type(3) {
        width: calc(30% - 10px);
      }
    }
  }

  .phone {
    dt {
      width: 40px;
    }

    dd {
      width: calc(100% - 40px);

      .kp-select {
        width: calc(30% - 10px);
      }

      .kp-input {
        margin-left: 10px;
        width: calc(40% - 10px);
      }

      .kp-button {
        margin-left: 10px;
        width: calc(30% - 10px);
      }
    }
  }

  .agreement {
    .kp-switch {
      margin-left: auto;
    }
  }

  .kp-select {
    margin-left: 10px;
  }
}
</style>
