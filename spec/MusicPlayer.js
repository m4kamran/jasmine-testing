describe('Music Player', () => {
	it('should be able to play a Song', () => {
		play();
		expect(state).toEqual('playing');
	});

	it('should be able to pause a song', () => {
		play();
		pause();
		expect(state).toEqual('paused');

		stop();
		pause();
		expect(state).toEqual('stopped');
	});

	it('should be able to stop a song', () => {
		stop();
		expect(state).toEqual('stopped');
	});
});
