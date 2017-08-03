describe('ClickCountView 모듈', () => {
  let updateEl, triggerEl, clickCounter, view

  beforeEach(()=> {
    updateEl = $('<span></span>');
    incTriggerEl = $('<button></button>')
    decTriggerEl = $('<button></button>')
    clickCounter = ClickCounter(); 
    view = ClickCountView(clickCounter, {updateEl, incTriggerEl, decTriggerEl})
  })

  describe('updateView()', () => {
    it('ClickCounter의 getCounter() 실행결과를 출력한다', ()=> {
      const counterValue = clickCounter.getCounter()
      view.updateView()
      expect(updateEl.text()).toBe(counterValue.toString())
    })
  })
  
  describe('increaseAndUpdateView()는', ()=> {
    it('ClickCounter의 increase 를 실행한다', ()=> {
      spyOn(clickCounter, 'increase')
      view.increaseAndUpdateView()
      expect(clickCounter.increase).toHaveBeenCalled()
    })
    
    it('updateView를 실행한다', ()=> {
      spyOn(view, 'updateView')
      view.increaseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })

  describe('decreaseAndUpdateView()는', ()=> {
    it('ClickCounter의 decrease 를 실행한다', ()=> {
      spyOn(clickCounter, 'decrease')
      view.decreaseAndUpdateView()
      expect(clickCounter.decrease).toHaveBeenCalled()
    })
    
    it('updateView를 실행한다', ()=> {
      spyOn(view, 'updateView')
      view.decreaseAndUpdateView()
      expect(view.updateView).toHaveBeenCalled()
    })
  })

  it('incTriggerEl에 클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다', ()=> {
    spyOn(view, 'increaseAndUpdateView')
    incTriggerEl.trigger('click')
    expect(view.increaseAndUpdateView).toHaveBeenCalled()
  })

  it('decTriggerEl에 클릭 이벤트가 발생하면 decreaseAndUpdateView를 실행한다', ()=> {
    spyOn(view, 'decreaseAndUpdateView')
    decTriggerEl.trigger('click')
    expect(view.decreaseAndUpdateView).toHaveBeenCalled()
  })
})