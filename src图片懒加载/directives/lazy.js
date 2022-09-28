export default {
  inserted(el, binding) {
    const imgSrc = el.src
    el.src = ''
    console.log('el', el);
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      //~ 元素会在出现可视区域和离开可视区域时触发这个回调函数
      console.log('触发', isIntersecting);
      if (isIntersecting) {
        //加载图片
        el.src = imgSrc
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
}