import * as password from "./password"
// @ponicode
describe("password.getHashedPassword", () => {
    test("0", () => {
        let callFunction: any = () => {
            password.getHashedPassword("$p3onyycat")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            password.getHashedPassword("NoWiFi4you")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            password.getHashedPassword("accessdenied4u")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            password.getHashedPassword("!Lov3MyPianoPony")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            password.getHashedPassword("YouarenotAllowed2Use")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            password.getHashedPassword("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
