game = new Game();

describe('Un match de tennis en simple', function () {
	beforeEach(function () {  
		this.addMatchers({  
			toBeBetween: function (rangeFloor, rangeCeiling) {  
				if (rangeFloor > rangeCeiling) {  
					var temp = rangeFloor;  
					rangeFloor = rangeCeiling;  
					rangeCeiling = temp;  
				}  
				return this.actual > rangeFloor && this.actual < rangeCeiling;  
			}  
		});
	});  
	it('Deux joueurs entrent sur le terrain', function() {
		expect(game._playerOneName).toBeDefined();
		expect(game._playerTwoName).toBeDefined();
		expect(game._playerOneScore).toBeDefined();
		expect(game._playerTwoScore).toBeDefined();
	});
	it('Le premier joueur est Federer', function() {
		game.setPlayerOneName('Federer');
        expect(game.getPlayerOneName()).toEqual('Federer');
    });
	it('Le second joueur est Djokovic', function() {
		game.setPlayerTwoName('Djokovic');
        expect(game.getPlayerTwoName()).toContain('Djoko');
    });
	it('Le score est vierge', function() {
        expect(game.getScore()).toEqual('0 - 0');
    });
	it('Federer fait un ace !', function() {
		game.playerOneScores();
        expect(game._playerOneScore).toEqual(1);
		expect(game.getScore()).toEqual('15 - 0');
    });
	it('Federer score de nouveau !', function() {
		game.playerOneScores();
        expect(game._playerOneScore).toEqual(2);
		expect(game.getScore()).toEqual('30 - 0');
    });
	it('Djokovic réduit le score', function() {
		game.playerTwoScores();
        expect(game._playerTwoScore).toEqual(1);
		expect(game.getScore()).toEqual('30 - 15');
    });
	it('Djokovic égalise !', function() {
		game.playerTwoScores();
        expect(game._playerTwoScore).toEqual(2);
		expect(game.getScore()).toEqual('30 - 30');
    });
	it('Balle de match Djoko !!', function() {
		game.playerTwoScores();
        expect(game._playerTwoScore).toEqual(3);
		expect(game.getScore()).toEqual('30 - 40');
    });
	it('Egalité !!', function() {
		game.playerOneScores();
        expect(game._playerOneScore).toEqual(3);
		expect(game._playerTwoScore).toEqual(game._playerTwoScore);
		expect(game.getScore()).toEqual('Deuce');
		expect(game._playerOneScore).toBeGreaterThan(2);
    });
	it('Le score est "deuce"', function() {
        spyOn(game, 'isDeuce');
		game.getScore();
		expect(game.isDeuce).toHaveBeenCalled();
    });
});
