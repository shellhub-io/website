<template>

  <div class="background">
    <div class="full-height">
      
      <div class="signup-wrapper">

        <div class="shellHub-logo">
          <img class="ShellHub-Logo-Negativo" src="@/static/logo-inverted.png">
        </div>

        <div class="row">
          <div class="row-items">
            <div class="new-account">
              New Account
            </div>

            <div>
              <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <ValidationProvider 
                  rules="required|email" 
                  vid="email"
                  name="Email" 
                  v-slot="{ errors }"
                >
                  <b-field
                    label="Email"
                    :type="{ 'is-danger': errors[0] }"
                    :message="errors"
                  >
                    <b-input v-model="email"></b-input>
                  </b-field>
                </ValidationProvider>

                <ValidationProvider 
                  rules="required|numUser" 
                  vid="username"
                  name="Username" 
                  v-slot="{ errors }"
                >
                  <b-field
                    label="Username"
                    :type="{ 'is-danger': errors[0] }"
                    :message="errors"
                  >
                    <b-input v-model="username"></b-input>
                  </b-field>
                </ValidationProvider>

                <ValidationProvider
                  rules="required|numPass"
                  vid="password"
                  name="Password"
                  v-slot="{ errors }"
                >
                  <b-field
                    label="Password"
                    :type="{ 'is-danger': errors[0] }"
                    :message="errors"
                  >
                    <b-input type="password" v-model="password"></b-input>
                  </b-field>
                </ValidationProvider>

                <ValidationProvider
                  rules="required|confirmed:password"
                  name="Password Confirmation"
                  v-slot="{ errors }"
                >
                  <b-field
                    label="Confirm Password"
                    :type="{ 'is-danger': errors[0] }"
                    :message="errors"
                  >
                    <b-input type="password" v-model="confirmation"></b-input>
                  </b-field>
                </ValidationProvider>

                <div class="button-register">
                  <b-button @click="handleSubmit(onSubmit)" rounded outlined expanded>Register</b-button>
                </div>
        
              </ValidationObserver>
            
            </div>

            <div class="footer-text">
              Already have an account?
              <a class="footer-link" href="http://cloud.shellhub.io/" >LOGIN</a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

</template>


<script>

import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name:'register',
  components: {
    ValidationObserver,
    ValidationProvider
  },
    data() {
      return {
        email: '',
        username: '',
        password: '',
        confirmation: "",
      }
    },
    methods: {
      onSubmit() {
        this.axios
          .post(process.env.GRIDSOME_API_URL,{
            email: this.email,
            username: this.username,
            password: this.password
          })
          .then(response => {
            this.$buefy.notification.open({
              duration: 7000,
                  message: 'Hi <b>'+ this.username +'</b>! <br> Your account has been successfully created. <br> You will be redirected to our system.',
                  position: 'is-top-right',
            })
            
            var timer = setTimeout(function() {
              window.location=`${location.protocol}//cloud.shellhub.io/login`
            }, 7000);
          })
          .catch(error => {
            if (error.response.status == 400){ // Invalid username and/or password
              this.$refs.form.setErrors({
                username: ['This username is not valid']
              });
            }
            else if (error.response.status == 409){ // username already exists

              for (var prop in error.response.data) {

                if (error.response.data[prop]['Field'] == 'username'){
                  this.$refs.form.setErrors({
                    username: ['This username is already taken']
                  });
                }
                else if(error.response.data[prop]['Field'] == 'email'){
                  this.$refs.form.setErrors({
                    email: ['This email is already taken']
                  });
                }
                else if(error.response.data[prop]['Field'] == 'password'){
                  this.$refs.form.setErrors({
                    password: ['This email is already taken']
                  });
                }
                else{
                  this.$buefy.notification.open({
                    duration: 7000,
                    message: 'Unknown Error',
                    position: 'is-top-right',
                    type: 'is-danger',
                  })
                }
              }
              if (! error.response.data){
                this.$buefy.notification.open({
                  duration: 7000,
                  message: 'Unknown Error',
                  position: 'is-top-right',
                  type: 'is-danger',
                })
              }

             }
            else if(error.response.status == 500){ // Unknown Error
              this.$buefy.notification.open({
                duration: 7000,
                message: 'Unknown Error',
                position: 'is-top-right',
                type: 'is-danger',
              })
            }
          });

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
  min-height: 78px;
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
  margin-top: 0px;
}

.button{
  color: #dce3ff;
  background-color: #394573;
}

.button:hover {
  color: #dce3ff;
}

.button:focus {
  color: #dce3ff;
}

.input{
  color: #dce3ff;
  background-color: #394573;
}

.input::placeholder {
  color: #dce3ff;
}

.footer-text{
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 50px;
  color: #dce3ff;

}

.footer-link{
  margin-left: 15px;
}

</style>
