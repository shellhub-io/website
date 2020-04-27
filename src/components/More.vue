<template>

  <div class="more">

      <div class="moreCenter">
        
        <div id="uniteAllComponents">

          <div class="titleContent-titleMore titleContent">
            Want to know more?
          </div>
          <div class="textContent-contentMore textContent">
            For more details, consult our documentation and, if you have any questions, contact us through the Gitter.
          </div>

          <div class="rectangleGitter">
            <a class="rectangleGitter" href="https://gitter.im/shellhub-io/community" target="_blank">

              <div class="rectangleGitter-first">
                <div class="textContent-fontRetangle textContent">
                  Connect on Gitter
                </div>
              </div>

              <div class="rectangleGitter-second">
                <div class="textContent-fontRetangle textContent">
                  &nbsp;
                  <img src="@/static/bullet-01.png">
                  &nbsp;  
                </div>
              </div>
            </a>
          </div>
          
        </div>
      </div>
  </div>

</template>

<script>

export default {
  name: 'More',
};

</script>

<style>

.more {
  max-width: 1170px;
  height: 450px;
  margin: auto;
}

.moreCenter {
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleContent-titleMore {
  width: 570px;
  height: 40px;
  font-size: 28px;
  line-height: 1.43;
  letter-spacing: -1px;
  text-align: center;
  margin: auto;
}

.textContent-contentMore {
  max-width: 570px;
  min-height: 60px;
  margin: 20px auto 0 auto;
}

.rectangleGitter{
  width: 243px;
  height: 40px;
  margin: 30px auto 0 auto;
}

.rectangleGitter-first{
  width: 212px;
  height: 100%;
  opacity: 0.9;
  background-color: #394573;
  display: inline-block;
}

.rectangleGitter-second{
  width: 31px;
  height: 100%;
  opacity: 0.9;
  background-color: #667acc;
  display: inline-block;
}

</style>