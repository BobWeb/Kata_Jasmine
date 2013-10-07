var Game = function () {
	this._playerOneName  = '';
	this._playerTwoName  = '';
	this._playerOneScore = 0;
	this._playerTwoScore = 0;
}

Game.prototype.setPlayerOneName = function (name) {
    this._playerOneName = name;
}
Game.prototype.getPlayerOneName = function () {
    return this._playerOneName;
}

Game.prototype.setPlayerTwoName = function (name) {
    this._playerTwoName = name;
}
Game.prototype.getPlayerTwoName = function () {
    return this._playerTwoName;
}

Game.prototype.getScore = function () {
	if (this._playerOneScore == 1 && this._playerTwoScore == 0) {
		return "15 - 0";
	}
	
	return "0 - 0";
};

Game.prototype.playerOneScores = function () {
	this._playerOneScore++;
}
Game.prototype.playerTwoScores = function () {
	this._playerTwoScore++;
}