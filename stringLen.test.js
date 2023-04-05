const Slen = require("./stringLen.js")

test("should return correct char length", ()=>{
  expect(Slen("abac")).toBe(4)
})

test("should check for not less then 1 and not bigger then 10", ()=>{
  expect(Slen("").toThrow("String must not be longer than 10 characters"))
})