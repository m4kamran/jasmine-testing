var state = 'stopped';

function play() {
	state = 'playing';
	console.log('playign');
}

function stop() {
	state = 'stopped';
	console.log('stopped');
}

function pause() {
	if (state == 'stopped') {
		return;
	} else {
		state = 'paused';
		console.log('paused');
	}
}
