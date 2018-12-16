<template>
  <div id="app">
    <navigation></navigation>
    <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
      Sign in with Facebook
    </fb-signin-button>
    <div class="container pt-3 pb-3 loggedincontent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'App',
  ready () {

  },
  data () {
    return {
      fbSignInParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
    // eslint-disable-next-line
      FB.api('/me', {'fields': 'id, name, email'}, dude => {
        console.log(`Good to see you, ${dude.name}.`, response, dude)
          // todo save "dude" to localStorage with expiration at (see below) and dont let the user continue after that, hide everything if not logged in
          console.log('Expires at ' + moment().add(response.authResponse.expiresIn, 'seconds').toString())
        //$('.fb-signin-button').hide()
        //$('.loggedincontent').show()
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  #app > .container {
    height: calc(100vh - 56px);
  }
  .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
