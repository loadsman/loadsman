import RuleWorker from '../../../../src/js/classes/Modules/Rule/RuleWorker.js'
import RuleCollection from '../../../../src/js/classes/Modules/Rule/RuleCollection.js'
import AjaxObserver from '../../../../src/js/classes/Ajax/AjaxObserver.js'

describe('RuleWorker', () => {
  let ruleWorker = new RuleWorker
  beforeEach(() => {
    ruleWorker = new RuleWorker
  })

  describe("properties", () => {
    it("are in place", () => {
      let hasRuleCollection = ruleWorker.ruleCollection instanceof RuleCollection
      expect(hasRuleCollection).toBe(true)
      let hasObserver = ruleWorker.ruleObserver instanceof AjaxObserver
      expect(hasObserver).toBe(true)
    })
  })

  describe("refreshes list", () => {
    it("loads rules and fills observer", (done) => {
      spyOn(ruleWorker.ruleObserver, 'send').and.returnValue(new Promise((resolve) => {resolve({'data': []})}))
      spyOn(ruleWorker.ruleCollection, 'setRules')
      let promise = ruleWorker.refreshList()
      expect(promise instanceof Promise).toBe(true)
      expect(ruleWorker.ruleObserver.send).toHaveBeenCalled()
      promise.then(() => {
        expect(ruleWorker.ruleCollection.setRules).toHaveBeenCalled()
        done()
      })
    })
  })
})