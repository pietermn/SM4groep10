package com.groep10.beerbuddies.logic

class Game(
    val id: Int,
    val name: String,
    val players: MutableList<Player> = mutableListOf(),
    val packId: Int,
    val miniGames: MutableList<MiniGameCard> = mutableListOf()
) {
}