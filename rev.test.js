const rev = require("./reverseString")


test("should reverse array", ()=>{
  expect(rev("abc")).toBe("cba")
})