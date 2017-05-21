describe("getTotal method", function() {
	it("should be 2", function() {
		expect(getTotal(1,1)).toEqual(2);
	});
	it("should be 40", function() {
		expect(getTotal(10,5,5,10,10)).toEqual(40);
	});
});

describe("fullName string generator method", function() {
	var fName = "Crystal",
		lName = "Finch";
	it("should be 'Crystal Finch'", function() {
		expect(fullName(fName,lName)).toBe("Crystal Finch");
	});
});
