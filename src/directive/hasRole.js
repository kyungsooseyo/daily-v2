import store from '../store/index'
const roles = store.state.userInfo.roles
export default {
  bind(el, binding) {

    //! 在binding阶段是拿不到el的parentNode的
    // console.log('el', el);
    // console.log('binding', binding);
  },
  inserted(el, binding) {
    // console.log('insert-el', el,el.parentNode);
    // console.log('insert-binding', binding);
    if (!roles.includes(binding.value)) {
      //~ 第一种方式
      // el.parentNode.removeChild(el)
      //~ 第二种方式
      el.style.display = 'none'
    }
  }
}