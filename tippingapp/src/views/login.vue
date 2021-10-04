<template>
  <div>
    <h1>ログイン</h1>
    <div class="userInformations_Container">
      <div class="userInformation">
        <p>メールアドレス</p>
        <input type="email" placeholder="E-mail" v-model="email" />
      </div>
      <div class="userInformation">
        <p>パスワード</p>
        <input type="password" placeholder="password" v-model="password" />
      </div>
    </div>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.userInformations_Container {
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.userInformation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding: 5px;
}
.userInformation > p {
  width: 150px;
  text-align: center;
  margin: 0;
}
.userInformation > input {
  height: 20px;
}
.testComponent {
  width: 700px;
  margin: 10px auto;
}
.testComponent > input {
  margin-top: 10px;
}
.testComponent > button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
