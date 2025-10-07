import TubesCursor from "./tubes.mini.js"

const app = TubesCursor(document.getElementById('canvas'), {
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"],
    lights: {
      intensity: 200,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
    }
  }
})

document.body.addEventListener('click', () => {
  const colors = randomColors(3)
  const lightsColors = randomColors(4)
  console.log(colors, lightsColors)
  app.tubes.setColors(colors)
  app.tubes.setLightsColors(lightsColors)
})

function randomColors (count) {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
}

// 页面加载完成后隐藏加载界面
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});