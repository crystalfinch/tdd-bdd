function getTotal() {
	var nums = Array.prototype.slice.call(arguments);
	var total;
	total = nums.reduce(function(sum, num) {
		return sum + num;
	}, 0);
	return total;
}

function fullName(first, last) {
	var str = first + " " + last;
	return str;
}
