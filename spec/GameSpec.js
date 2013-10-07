describe("Un match de tennis en simple", function () {
	beforeEach(function() {
		game = new Game();
	});
    it("Le premier joueur est Federer", function() {
		game.setPlayerOneName('Federer');
        expect(game.getPlayerOneName()).toEqual("Federer");
    });
	it("Le second joueur est Djokovic", function() {
		game.setPlayerTwoName('Djokovic');
        expect(game.getPlayerTwoName()).toContain("Djoko");
    });
	it("Le score est vierge", function() {
        expect(game.getScore()).toEqual("0 - 0");
    });
	it("Federer fait un ace !", function() {
		game.playerOneScores();
        expect(game._playerOneScore).toEqual(1);
		expect(game.getScore()).toEqual("15 - 0");
    });
	it("Federer score de nouveau !", function() {
		game.playerOneScores();
        expect(game._playerOneScore).toEqual(2);
		expect(game.getScore()).toEqual("30 - 0");
    });
});
