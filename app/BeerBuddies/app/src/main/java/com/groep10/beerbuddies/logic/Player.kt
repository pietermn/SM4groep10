package com.groep10.beerbuddies.logic

import com.groep10.beerbuddies.enums.Color

class Player(
    val id: Int,
    val name: String,
    val color: Color,
    val sips: Int,
    val drank: Int,
    val challenges: Int
) {
}