<script lang="tsx">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TypeScript extends Vue {

  render() {
    return (
      <div style={{marginTop:'4em', marginLeft:'15%'}}>
      <a href="https://github.com/PatrickNiyogitare28/foreach-is-backed-up.git" target="_blank">
       <button style={{
         padding:'20px',fontSize:'18px', borderRadius:'20px', border: '1px solid #4c0f75', backgroundColor:'#4c0f75',
         color:'white'
       }}
       >⭐ Star on github</button>
       </a>
      </div>
    )
  }
}
</script>
