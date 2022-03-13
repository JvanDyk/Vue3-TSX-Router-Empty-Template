import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './styles/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/home">Home</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});