<template>
    <div >
      <div class="contentRectangle Content"></div>

      <div class="content">
        
        <div class="blockSymbolTitle">

          <div class="symbolShellHub">
            <img src="@/static/symbol-shell.png">
          </div>
          <div class="titleContent-contentFeture titleContent">
            Every feature you've  come to expect
          </div>

        </div>

        <div class="groupDetails" >
          <!-- Primeiro bloco -->
          <div v-for="(edge,index) in $page.posts.edges" :key="edge.node.id">

            <div class="detailsLeft" v-if="$page.posts.edges[index*2]">  
                <div class="bullet">
                  <img src="@/static/bullet-01.png">
                </div>

                <div class="blockContentFeature">
                  <div class="titleFeature">
                    {{ $page.posts.edges[index*2].node.title }}
                  </div>
                  <div class="contentFeature">
                      {{ $page.posts.edges[index*2].node.slug }}
                  </div>
                </div>
            </div>
          
          
            <!-- Segundo bloco -->
            <div class="detailsRight" v-if="$page.posts.edges[index*2+1]">
                <div class="bullet">
                  <img src="@/static/bullet-01.png">
                </div>

                <div class="blockContentFeature">
                  <div class="titleFeature">
                    {{ $page.posts.edges[index*2+1].node.title }}
                  </div>
                  <div class="contentFeature">
                    {{ $page.posts.edges[index*2+1].node.slug }}
                  </div>
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
      data: [
        { 'id': 1, 'title': 'Secure Remote Connections', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
        { 'id': 2, 'title': 'Full IoT device management', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
        { 'id': 3, 'title': 'Batch release application', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
        { 'id': 4, 'title': 'Restrict access to login IP', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
        { 'id': 5, 'title': 'Software-only solution', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
        { 'id': 6, 'title': 'Customize API Access', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra odio vitae.', },
      ],
    }
  }
}
</script>

<style>


.contentRectangle {
  max-width: 1170px;
  height: 34px;
  margin: -68px auto 0 auto;
  background-color: #3d414d;
  border-radius: 20px 20px 0px 0px;
}

.content {
  max-width: 1170px;
  min-height: 100px;
  margin: auto;
  background-color: #333640;
  border-radius: 0px 0px 20px 20px;
  padding-bottom: 95px;
  
}

.blockSymbolTitle{
  max-width: 550px;
  height: 150px;
  margin-top: 50px;
  margin-left: -20px;
  display: inline-block;
  z-index:4;
}

.symbolShellHub {
  max-width: 111px;
  height: 83px;
  display: inline-block;
  vertical-align: top;
}

.titleContent-contentFeture {
  width: 370px;
  min-height: 100px;
  margin-top: 37px;
  margin-left: 58px;
  font-size: 28px;
  line-height: 1.43;
  letter-spacing: 0px;
  display: inline-block;
}

.groupDetails{
  max-width: 757px;
  margin-top: 103px;
  justify-content: center;
  align-items: center;
  margin: 103px auto 0 auto;
}

.detailsLeft{
  margin-top:0%;
  width: 337px;
  height: 100%;
  margin-top: 0px;
  margin-bottom: 50px;
  display: inline-block;
  vertical-align: top;
}

.detailsRight{
  margin-top:0%;
  width: 337px;
  height: 100%;
  margin-top: 0px;
  margin-left: 83px;
  margin-bottom: 50px;
  display: inline-block;
  vertical-align: top;
}

.bullet {
  width: 20px;
  height: 100%;
  margin-top: 4px;
  display: inline-block;
  vertical-align: top;
}

.blockContentFeature {
  width: 317px;
  height: 100%;
  margin-left: 0px;
  display: inline-block;
}

.titleFeature {
  max-width: 317px;
  min-height: 28px;
  margin-bottom: 17px;
  font-family: 'Roboto Slab', serif;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.contentFeature{
  max-width: 317px;
  height: 100%;
  font-family: 'Roboto Slab', serif;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 0.5px;
  color: #ffffff;
}

</style>