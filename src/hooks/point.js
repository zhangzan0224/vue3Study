import { reactive, onMounted, onUnmounted } from 'vue'

export default () => {
  let point = reactive({
    x: 0,
    y: 0
  })
  const getPoint = (event) => {
    point.x = event.pageX
    point.y = event.pageY
  }
  onMounted(() => {
    window.addEventListener('click', getPoint)
  })
  onUnmounted(() => {
    window.removeEventListener('click', getPoint)
  })
  return point
}
