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
	if (this.hasWinner()) {
		return this.playerWithHighestScore() + " has won the game !";
	}
	
	if (this.hasAdvantage()) {
		return "Advantage " + this.playerWithHighestScore();
	}
	
	if (this.isDeuce()) {
		return "Deuce";
	}
	
	return this.translateScore(this._playerOneScore) + " - " + this.translateScore(this._playerTwoScore);
};

Game.prototype.playerOneScores = function () {
	this._playerOneScore++;
}
Game.prototype.playerTwoScores = function () {
	this._playerTwoScore++;
}

Game.prototype.isDeuce = function () {
	return (this._playerOneScore >= 3 && this._playerTwoScore == this._playerOneScore);
}

Game.prototype.playerWithHighestScore = function () {
	return (this._playerOneScore > this._playerTwoScore) ? this._playerOneNamer : this._playerTwoName;
}

Game.prototype.hasAdvantage = function () {
	if (this._playerOneScore >= 4 && this._playerOneScore === this._playerTwoScore + 1) {
		return true;
	}
	
	if (this._playerTwoScore >= 4 && this._playerTwoScore === this._playerOneScore + 1) {
		return true;
	}
	
	return false;
}

Game.prototype.hasWinner = function () {
	if (this._playerOneScore >= 4 && this._playerOneScore === this._playerTwoScore + 2) {
		return true;
	}
	
	if (this._playerTwoScore >= 4 && this._playerTwoScore === this._playerOneScore + 2) {
		return true;
	}
	
	return false;
}

Game.prototype.translateScore = function (score) {
	switch (score) {
		case 0:
			return "0";
		case 1:
			return "15";
		case 2:
			return "30";
		case 3:
			return "40";
		default:
			"Dat game is CRAZYYY ! Dat score doesn't even exist !";
	}
}