describe("Card Numbers", () => {
  var ace,king,queen,jack, one, two, three, four, five, six, seven, eight, nine, ten;

  it("should be an Ace", () => {
    ace = new Ace();

    expect(ace.constructor).toBe(Ace);
  });

  it("should be an King", () => {
    king = new King();

    expect(king.constructor).toBe(King);
  });

  it("should be an Queen", () => {
    queen = new Queen();

    expect(queen.constructor).toBe(Queen);
  });

  it("should be an Jack", () => {
    jack = new Jack();

    expect(jack.constructor).toBe(Jack);
  });

  it("should be an One", () => {
    one = new One();

    expect(one.constructor).toBe(One);
  });

  it("should be an Two", () => {
    two = new Two();

    expect(two.constructor).toBe(Two);
  });

  it("should be an Three", () => {
    three = new Three();

    expect(three.constructor).toBe(Three);
  });

  it("should be an Four", () => {
    four = new Four();

    expect(four.constructor).toBe(Four);
  });

  it("should be an Five", () => {
    five = new Five();

    expect(five.constructor).toBe(Five);
  });

  it("should be an Six", () => {
    six = new Six();

    expect(six.constructor).toBe(Six);
  });

  it("should be an Seven", () => {
    seven = new Seven();

    expect(seven.constructor).toBe(Seven);
  });

  it("should be an Eight", () => {
    eight = new Eight();

    expect(eight.constructor).toBe(Eight);
  });

  it("should be an Nine", () => {
    nine = new Nine();

    expect(nine.constructor).toBe(Nine);
  });

  it("should be an Ten", () => {
    ten = new Ten();

    expect(ten.constructor).toBe(Ten);
  });

});