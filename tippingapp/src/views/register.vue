<template>
  <div>
    <h1>新規登録画面</h1>
    <div class="userInformations_Container">
      <div class="userInformation">
        <p>ユーザー名</p>
        <input type="text" placeholder="User-Name" v-model="name" />
      </div>
      <div class="userInformation">
        <p>メールアドレス</p>
        <input type="email" placeholder="E-mail" v-model="email" />
      </div>
      <div class="userInformation">
        <p>パスワード</p>
        <input type="password" placeholder="password" v-model="password" />
      </div>
    </div>

    <div class="registerBtn">
      <button @click="registerNewUser">新規登録</button>
      <router-link to="/login">ログインはこちら</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerNewUser() {
      this.$store.dispatch("registerNewUser", {
        email: this.email,
        password: this.password,
        name: this.name,
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
.registerBtn > button {
  background-color: #fff;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  display: block;
  margin: 20px auto 0;
}
.registerBtn > button:hover {
  background-color: #bbb;
}
.registerBtn > a {
  display: block;
  margin-top: 20px;
}
</style>
