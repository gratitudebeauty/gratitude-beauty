const menu = await fetch('/assets/menu.json').then(r => r.json())

let lastClick = 0;

function failThrottle()
{
  let d = new Date()
  if (d - lastClick < 300) return true
  lastClick = d
}

function createPaginator(root)
{
  const value = menu[root.getAttribute('data-value')]['image-paginator']
  if (!value) return false

  const N = value.images.length || 0
  if (N <= 0) return false

  const images = value.images.map(url => {
    const img = new Image()
    img.src = url
    return img
  })

  images.forEach((img, idx) =>
  {
    root.appendChild(img)

    img.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      if (failThrottle()) return false

      // clean-up
      root.querySelectorAll('.left, .right')
        .forEach(x => {
          x.className = ''
        })

      let vec = e.target.getBoundingClientRect()
      if (e.clientX - vec.left - (vec.width / 2) < 0)
      { // move left to right
        images[(idx+N-1) % N].className = 'from left'
        img.className = 'right'
      }
      else
      { // move right to left
        images[(idx+N+1) % N].className = 'from right'
        img.className = 'left'
      }
      setTimeout(() => {
        root.querySelectorAll('.from')
          .forEach(anime => {
            anime.className = 'show'
          })
      }, 0)
    })
  })

  if (images[0]) {
    images[0].className = 'show'
  }

  // set size
  const imgLoadReady = Promise.all(images.map(img => new Promise(resolve =>
    img.addEventListener('load', resolve, { once: true })
  )))

  function resize()
  {
    imgLoadReady.then(() => {
      const vec = root.getBoundingClientRect()
      const mxh = Math.max.apply(null, images.map(i =>
        (vec.width || window.innerWidth) * i.naturalHeight / i.naturalWidth
      ))
      if (mxh === 0) debugger
      root.style.height = `${mxh}px`
    })
  }

  window.addEventListener('resize', resize)
  resize()

}

document.querySelectorAll('.paginator').forEach(createPaginator)
