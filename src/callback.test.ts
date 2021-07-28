/** gets a number between 1 and 10 for the callback
 * @callback numberHandler is passed the number generated
 */
 function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10));
  }

  function numberChecker(result: number) {
    expect(result >= 1).toBeTruthy();
    expect(result <= 10).toBeTruthy();
    expect(result.toFixed(0)).toBe(`${result}`);
  }

  describe("numberHandler", () => {
    it("handles numbers", () => {
      getNumber(numberChecker);
    });
});