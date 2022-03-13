
import { defineComponent, ref } from "vue";
import Logo from '../assets/logo.png';

export default defineComponent({
  name: 'App',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const count = ref(0);
    return () => (
      <>
        <h1>{props.title}</h1>
        <div>
          <img src={Logo}/>
        </div>
        <div style={{border:'1px solid #42b983', borderWidth: 1, width:'960px !important', margin:'auto'}}>
          {count.value}
          <br/>
          <button onClick={() => {count.value++;}} style={{width:'100%'}}>++</button>
        </div>
      </>
    );
  },
});
