import { singleton } from "../src/singleton"

describe("singleton: ", () => {
    it("Will return the same instance after every invocation", () => {
        @singleton
        class Dummy{
            date
            constructor(){
                this.date = Date.now()
            }
        }
        expect(new Dummy()).toBe(new Dummy())
    })
    it("The Class prototype stay the same", () => {
        @singleton
        class Dummy{
            date
            constructor(){
                this.date = Date.now()
            }
        }
        const dummy = new Dummy()
        expect(dummy instanceof Dummy).toBe(true)
    })
})