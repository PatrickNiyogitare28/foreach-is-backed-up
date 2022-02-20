import Vue, { VNode } from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class Onboard extends Vue {
  private render(): VNode {
    return (
      <div style={{width:'90%'}}>
          <h1 style={{fontSize:'6em', color:'#4c0f75'}}>Foreach is Backed up</h1>
          <div style={{width:'60%', height:'20px', backgroundColor:'#4c0f75', borderRadius:'20px' }}></div>
      </div>
    )
  }

  @Watch('text')
  private onInput() {
  }
}
