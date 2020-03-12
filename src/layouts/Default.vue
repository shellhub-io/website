<template>

  <div class="Shellhub-LP-1280">

    <!-- <div class="teste">
    <div class="one">
        <svg xmlns="http://www.w3.org/2000/svg" width="932" height="398" viewBox="0 0 932 398">
      <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-dasharray="2 6" stroke-opacity=".761" stroke-width="2" opacity=".901">
          <path d="M932 28C490 481 251-5 2 395M858 31C436 441 293 28 2 390M817 0C389 423 276 64 0 398" transform="translate(-1 1)"/>
      </g>
  </svg>
    </div>
    <div class="two">
      <h1>Juca</h1>
    </div>
</div> -->
    <!-- <div class="two">
      <div class="aux">
        <svg xmlns="http://www.w3.org/2000/svg" width="932" height="398" viewBox="0 0 932 398">
          <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-dasharray="2 6" stroke-opacity=".761" stroke-width="2" opacity=".901">
            <path d="M932 28C490 481 251-5 2 395M858 31C436 441 293 28 2 390M817 0C389 423 276 64 0 398" transform="translate(-1 1)"/>
          </g>
        </svg>
      </div>
    </div> -->

    <!-- <div class="one"> -->
      <About></About>
      <Feature></Feature>
      <More></More>
      <Bottom></Bottom>
    <!-- </div> -->
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css?family=Overpass+Mono&display=swap');
/* .aux{
  margin: 428px auto 0 auto;
} */

/* .one{
  position: relative;
} */

.two{
    width: 100%;
    /* height: 100%; */
    /* margin: 30px auto 0 auto; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.Shellhub-LP-1280 {
  min-height: 2283px;
  background-color: #272b33;
  position: relative;
  background-image: url('../static/Nuvem_Shellhub_Completo.png');
  background-repeat: no-repeat;
  background-position: top right;
}

a:link, a:visited, a:hover, a:active {
  color: #dce3ff;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
  /* font-family: RobotoSlab; */
  font-family: 'Roboto Slab', serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.5px;
  color: #dce3ff;
}

.textLink{
  /* font-family: RobotoSlab; */
  font-family: 'Roboto Slab', serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.5px;
  color: #dce3ff;
}

.alignContent {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.titleContent {
  /* "Overpass Mono", sans-serif; */
  /* font-family: Overpass; */
  font-family: 'Overpass Mono', monospace;
  font-size: 44px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: -2px;
  color: #ffffff;
}

.textContent {
  /* font-family: RobotoSlab; */
  font-family: 'Roboto Slab', serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
}


.textContent-fontRetangle{
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}


/* a.rectangle:link, a.rectangle:visited, a.rectangle:hover, a.rectangle:active {
  color: #dce3ff;
  text-align: center;
  text-decoration: underline;
  display: inline-block;
} */



</style>