<template>
  
  <div class="bottom">
    <div class="line"></div>

    <div class="alignContent">

      <div class="alignContent">
        <div class="alignContent">
            <img class="ShellHub-Logo-Negativo" src="@/static/logo-inverted.png">
        </div>
        <div class="alignContent">
          <div class="textLink-documentation textLink">
            <a href="https://shellhub-io.github.io/" target="_blank">Documentation</a>
          </div>
        </div>
        
        <div class="alignContent">
          <div class="textLink-support textLink">
            <a href="https://gitter.im/shellhub-io/community" target="_blank">Getting Help</a>
          </div>
        </div>

      </div >

      <div class="created">
        <div class="createdRight">

          <div class="textLink-created textLink">
          Created-by
          </div>
          <div class="textLink-OSSystems textLink">
            <a href="https://www.ossystems.com.br/" target="_blank">O.S.Systems</a>
          </div>
        
        </div>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<style>

.bottom {
  max-width: 1170px;
  height: 108px;
  margin: auto;
  vertical-align: bottom;  
}

.line {
  max-width: 1169px;
  height: 1px;
  border: solid 1px #ffffff;
  opacity: 0.15;
}

.created{
  width: 100%;
  display: inline-block;
}

.createdRight{
  float: right;
}

.textLink-documentation {
  width: 139px;
  height: 30px;
  margin-left: 55px;
}

.textLink-support {
  width: 130px;
  height: 30px;
  margin-left: 39px;
}

.textLink-created {
  min-width: 96px;
  margin-right: 9px;
  height: 30px;
  display: inline-block;
}

.textLink-OSSystems {
  height: 30px;
  display: inline-block;
  text-decoration: underline;
}

</style>