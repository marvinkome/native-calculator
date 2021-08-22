const index = require("./index")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new index.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
