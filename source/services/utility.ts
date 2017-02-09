function calculatePace(time) {
	return time.time / time.distance;
}

function toDate(minutes) {
	return new Date(minutes * 60000);
}

function remove(array, item) {
	var index = array.indexOf(item);

	if (index !== -1) {
		array.splice(index, 1);
	}
}
