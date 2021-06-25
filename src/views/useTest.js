import { reactive, computed, watch, onMounted, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'


export default function useTest() {
  const state = reactive({
    count: 1
  });
  const {ctx} = getCurrentInstance()
  let newcount =ref (1)
  const router = useRouter()
const store = useStore() 
  const gotoAbout = () => {
    router.push('/about')
  }
  const increment = () => {
    state.count++;
  };
  const doubleCount = computed(() => state.count * 2);

  const number= computed(() => store.state.number)
  watch(() => state.count,() => {
      console.log('79');
  })
  onMounted(() => {
      console.log('987');
  })
  return {
    state,
    increment,
    doubleCount,
    gotoAbout,
    number
  };
}
