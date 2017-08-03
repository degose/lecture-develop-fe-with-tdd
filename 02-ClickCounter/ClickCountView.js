var ClickCountView = function(clickCounter, options) {
  const view = {
    updateView() {
      options.updateEl.text(clickCounter.getCounter())
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    },

    decreaseAndUpdateView() {
      clickCounter.decrease()
      this.updateView()
    }
  }
  
  options.incTriggerEl.on('click', () => {
   view.increaseAndUpdateView()   
  })

  options.decTriggerEl.on('click', () => {
   view.decreaseAndUpdateView()   
  })

  return view
}