<template>

  <div class="background">
    <div class="full-height">
      
      <div class="signup-wrapper">

        <div class="shellHub-logo">
          <img class="ShellHub-Logo-Negativo" src="@/static/logo-inverted.png">
        </div>

        <div class="row">
          <div class="testess">
            <div class="new-account">
              New Account
            </div>

            <b-field label="Username:"
                :type="{ 'is-danger': this.hasErrorUser }"
                :message="[
                    { 'Username is not available': this.hasErrorUserAvailable },
                    { 'Username was not inserted': this.hasErrorUserinserted }
                    ]">
                <b-input v-model="username" value='juca' maxlength="30" placeholder="Username" @input='verifyUserName'></b-input>
            </b-field>

            <b-field label="Password:"
                :type="{ 'is-danger': this.hasErrorPass }"
                :message="[
                    { 'Password was not inserted': this.hasErrorPass },
                ]">
                <b-input v-model="password" value='' type="password" maxlength="30" placeholder="Password" password-reveal @input='verifyPassword'></b-input>
            </b-field>

            <b-field label="Password (again):"
                :type="{ 'is-danger': this.hasErrorPassAgain || this.hasErrorPassAgainDiff}"
                :message="[
                    { 'Password again was not inserted': this.hasErrorPassAgain },
                    { 'Password again is different': this.hasErrorPassAgainDiff },
                ]">

                <b-input v-model="againPassword" value='' type="password" placeholder="Password (again)" password-reveal @input='verifyPasswordAgain'></b-input>
            </b-field>

            <b-button class="button-register" @click="register" rounded outlined expanded>Register</b-button>

            
            <div class="footer-text">
              Already have an account?
              <a class="footer-link" href="http://cloud.shellhub.io/" >LINK</a>
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
        hasErrorUserinserted: false,
        hasErrorUserAvailable: false,
        hasErrorUser: false,
        hasErrorPass: false,
        hasErrorPassAgain: false,
        hasErrorPassAgainDiff: false,
        username: '',
        password: '',
        againPassword: ''
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
      
      register() {
        if (this.username == '') {
          this.hasErrorUser = true
          this.hasErrorUserinserted = true
        }
        if (this.password == '') {
          this.hasErrorPass = true
        }
        if (this.againPassword == '') {
          this.hasErrorPassAgain = true
        }
        if((this.againPassword != this.password) && (this.againPassword != '') ){
          this.hasErrorPassAgainDiff = true
        }


        if((this.username != '') && (this.password != '') && (this.againPassword != '') && (this.password == this.againPassword)){
          
          // const headers = {
          //   'Access-Control-Allow-Origin': '*',
          //   'Content-Type': 'text/plain',
          //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
          // };
          
          this.axios
            .post(process.env.GRIDSOME_API_URL,{
              username: this.username,
              password: this.password
            })
            // {headers})
            // { useCredentails: true })
            .then(response => {
              // console.log(response)
              this.$buefy.dialog.alert({
                message: 'Your account was created successfully',
                confirmText: 'OK',

                type: 'is-success',
              })
            })
            .catch(error => {
              // console.log(error.response)
              if (error.response.status == 409){
                this.hasErrorUser = true
                this.hasErrorUserAvailable = true
              }
          });          
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

.testess{
  width: 455px;
}

.new-account{
  font-family: 'Roboto Slab', serif;
  font-size: 25px;
  color: #dce3ff;
  margin-bottom: 50px;
}

.label{
  color: #dce3ff;
}

.button-register{
  color: #dce3ff;
  background-color: #394573;
}

.button:hover {
  color: #dce3ff;
}

.input{
  color: #dce3ff;
  background-color: #394573;
  margin-bottom: 10px;
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
