<template>
  <div id="login">
    <form @submit="onLogin">
        <label for="username">Username</label>
        <input name="username" v-model="username" type="text" />
        <label for="password">Password</label>
        <input name="password" v-model="password" type="password" />
        <button type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
import movieApi from './api/movieApi'

export default {
  name: 'Login',
  data: function () {
    return {
        username: '',
        password: '',
        requestToken: null,
        apiKey: '54b9ebd748467d0d87a18f75275790d8'
    }
  },
  mounted: function() {
    movieApi.get('/authentication/token/new?api_key=' + this.apiKey)
    .then(response => this.requestToken = response.data.request_token);
  },
  methods: {
      async onLogin(e) {
          e.preventDefault();
          const auth = await movieApi.post('/authentication/token/validate_with_login?api_key=' + this.apiKey,{
                username: this.username,
                password: this.password,
                request_token: this.requestToken
                });
        if(auth.data.success) {
            const response = await movieApi.post('/authentication/session/new?api_key=' + this.apiKey, {
                request_token: this.requestToken
            });

            sessionStorage.setItem('sessionId', response.data.session_id);
            this.getUser(response.data.session_id);
            this.$router.push('/')
        }
      },

      async getUser(sessionId) {
          const response = await movieApi.get('/account?api_key=' + this.apiKey + '&session_id='+ sessionId);
          sessionStorage.setItem('user', JSON.stringify(response.data));
      }
  }
}
</script>
