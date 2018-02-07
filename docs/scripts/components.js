Vue.component('fretboard', {
  template:`
    <div>
      hello
      <ol class='strings'>
        <string v-for='(stringArray, index) in boardArray'
          v-bind:key=index
          v-bind:stringArray=stringArray
          v-bind:stringVal=index
          >
          </string>
      </ol>
    </div>
  `,
  data: function(){
    var stringCount = 6;
    var fretCount = 18
    var boardArray = []
    for(var string=0; string<stringCount; string++){
      var stringArray = []
      for(var fret=0; fret<fretCount; fret++){
        stringArray.push(fret)
      }
      boardArray.push(stringArray)
    }
    return {boardArray}
  }
})

Vue.component('string', {
  props:['stringArray', 'stringVal'],
  template:`
  <li class='string'>
    <ol class='frets'>
      <fret v-for='(fretVal, index) in stringArray'
      v-bind:key=index
      v-bind:fretVal=fretVal
      v-bind:stringVal=stringVal
      >
      </fret>
    </ol>
  </li>
  `
})

Vue.component('fret', {
  props:['fretVal', 'stringVal'],
  template:`
  <li class='fret {{noteVal}}'>
    S-{{stringVal}}-{{fretVal}}
    <br>
    {{noteVal}}
  </li>
  `,
  computed: {
    noteVal:function(){
      return this.fretVal+this.stringVal*5-(Math.floor(this.stringVal/4))
    }
  }
})
