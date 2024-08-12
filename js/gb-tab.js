
class Tab
{
  constructor(tab)
  {
    Object.assign(this, tab)
  }
  select(value = true)
  {
    if (value)
    {
      this.element.setAttribute('selected', true)
      this.tab.setAttribute('selected', true)
    } else {
      this.element.removeAttribute('selected')
      this.tab.removeAttribute('selected')
    }

  }
}

function createTab(root)
{
  const items = [...root.querySelectorAll('.tab-header .tab-item')]
    .map(x => new Tab({
      element: x,
      value: x.getAttribute('data-value'),
      text: x.innerText,
      tab: null,
    }))


  root.querySelectorAll('.tab-body > *')
    ?.forEach(x => {
      const v = x.getAttribute('data-value')
      items.forEach(y => {
        if (v === y.value) y.tab = x
      })
    })

  items?.forEach(x => {
    x.element.addEventListener('click', () => {
      items.forEach(t => t.select(false))
      x.select()
    })
    x.select(false)
  })

  items[0]?.select()
}

document.querySelectorAll('.gb-tab').forEach(createTab)
