<template>

  <div class="background">
    <div class="full-height">
      
      <div class="signup-wrapper">

        <div class="shellHub-logo">
          <img class="ShellHub-Logo-Negativo" src="@/static/logo-inverted.png">
        </div>

        <div class="row">
          <div class="row-items">
            <div class="login-account">
              Login
            </div>

            <b-field label="Username:"
              :type="{ 'is-danger': this.hasErrorUser }"
                :message="[
                  { 'Username was not inserted': this.hasErrorUserInserted },
                  { '': this.hasErrorLogin }
                ]">
              <b-input v-model="username" value='' maxlength="30" placeholder="Username" @input='verifyUserName'></b-input>
            </b-field>

            <b-field label="Password:"
              :type="{ 'is-danger': this.hasErrorPass }"
                :message="[
                  { 'Password again was not inserted': this.hasErrorPassInserted },
                  { 'The e-mail username and/or password you specified are not correct.': this.hasErrorLogin }
                ]">
              <b-input v-model="password" value='' type="password" maxlength="30" placeholder="Password" password-reveal @input='verifyPassword'></b-input>
            </b-field>
            
            <div class="button-login">
              <b-button @click="login" rounded outlined expanded>Login</b-button>
            </div>

            <div class="footer-text">
              Don't you have you an account?
              <a class="footer-link" href="./register">SIGN UP</a>
            </div>

          </div>

        </div>
        
      </div>


    </div>
  </div>

</template>


<script>
  export default {
    data() {
      return {
        hasErrorLogin: false,
        hasErrorUserInserted: false,
        hasErrorUserAvailable: false,
        hasErrorUser: false,
        hasErrorPass: false,
        hasErrorPassAgain: false,
        hasErrorPassAgainDiff: false,
        username: '',
        password: '',
        againPassword: '',
        hasErrorPassInserted: false
      }
    },
    methods: {
      verifyUserName(){
        this.hasErrorUser = false
        this.hasErrorUserinserted = false
      },
      verifyPassword(){
        this.hasErrorPass = false
        this.hasErrorPassAgainDiff = false
      },
      verifyPasswordAgain(){
        this.hasErrorPassAgain = false
        this.hasErrorPassAgainDiff = false
      },
      
      login() {
        this.hasErrorUser = false
        this.hasErrorPass = false
        this.hasErrorLogin = false

        if (this.username == '') {
          this.hasErrorUser = true
          this.hasErrorUserInserted = true
        }
        if (this.password == '') {
          this.hasErrorPass = true
          this.hasErrorPassInserted = true
        }

        if ((this.username != '') && (this.password != '')) {
          this.hasErrorUserInserted = false
          this.hasErrorPassInserted = false

          // this.hasErrorUser = true
          // this.hasErrorPass = true
          // this.hasErrorLogin = true
          console.log(process.env.GRIDSOME_API_LOGIN)
          
          this.axios
            .post(process.env.GRIDSOME_API_LOGIN,{
              username: this.username,
              password: this.password
            })
            // {headers})
            // { useCredentails: true })
            .then(response => {
              localStorage.setItem('token', response.data['token']);
              localStorage.setItem('user', response.data['user']);
              localStorage.setItem('tenant', response.data['tenant']);

            
              console.log("Then", response)

              setTimeout(function() {
                window.location.href = "http://localhost/api/devices";
              }, 2000);


              // {token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib…MjDWFJmbimIOD8CN6QeBXPJqao8muOL461s6qUwQ2Bz1Dl43w", user: "leo", tenant: "b6ff6436-d2fa-4062-af00-ba18ff212a22"}

              // this.$buefy.dialog.alert({
              //   message: 'Your account was created successfully',
              //   confirmText: 'OK',

              //   type: 'is-success',
              // })
            })
            .catch(error => {
              console.log("Catch", error.response)
              // if (error.response.status == 409){
              //   this.hasErrorUser = true
              //   this.hasErrorUserAvailable = true
              // }
          });          
        // }
        }
                  

      }
    }
  }
</script>



<style>

.background{
  width: 100%;
  background-color: #272b33;
  background-image: url('../static/Nuvem_Shellhub_Completo.png');
  background-repeat: no-repeat;
  background-position: top right;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-height{
  width: 682px;
  background-color: #394573;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -350px;
}

.signup-wrapper{
  width: 455px;
  height: 100vh;
  padding-top: 30px;
  overflow: hidden;
}

.shellHub-logo{
  width: 100%;
  height: 52px;
  margin-left: -5px;
}

.row{
  width: 455px;
  height: 100%;
  align-items: center;
  margin: auto;
  display: flex;
}

.row-items{
  width: 455px;
}

.field{
  height: 78px;
}

.login-account{
  font-family: 'Roboto Slab', serif;
  font-size: 25px;
  color: #dce3ff;
  margin-bottom: 50px;
}

.label{
  color: #dce3ff;
}

.button-login{
  margin-top: 20px;
}

.button{
  color: #dce3ff;
  background-color: #394573;
  margin-top: 10px;
}

.button:hover {
  color: #dce3ff;
}

.input{
  color: #dce3ff;
  background-color: #394573;
  /* margin-bottom: 10px; */
}

.input::placeholder {
    color: #dce3ff;
}

.footer-text{
  width: 100%;
  justify-content: center;
  align-items: center;
  /* margin: auto; */
  display: flex;
  padding-top: 50px;
  color: #dce3ff;

}

.footer-link{
  margin-left: 15px;
}

a:link {
  text-decoration:none;
}

</style>
