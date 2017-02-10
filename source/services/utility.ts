export function calculatePace(time) {
	return time.time / time.distance;
}

export function toDate(minutes) {
	return new Date(minutes * 60000);
}

export function remove(array, item) {
	var index = array.indexOf(item);

	if (index !== -1) {
		array.splice(index, 1);
	}
}
