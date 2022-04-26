package com.example.memoriespoc.util

    data class BigCard(val date: String, val back: String, val front: String)

    fun getBigCards() = listOf(
        BigCard( "22-02-2022","givan1_1", "givan1_2" ),
        BigCard( "10-02-2022","pietern1", "pietern2" ),
        BigCard( "01-02-2022","pieterm1", "pieterm2" ),
        BigCard( "20-01-2022","givan2_1", "givan2_2" ),
        BigCard("18-01-2022","img_view", "img_couple"),
        BigCard( "22-02-2022","givan1_1", "givan1_2" ),
        BigCard( "10-02-2022","pietern1", "pietern2" ),
        BigCard( "01-02-2022","pieterm1", "pieterm2" ),
        BigCard( "20-01-2022","givan2_1", "givan2_2" ),
        BigCard("18-01-2022","img_view", "img_couple")
    )

    data class SmallCard(val image: String, val city: String, val country: String)

    fun getSmallCards() = listOf(
        SmallCard( "pieterm1","Amsterdam", "Netherlands" ),
        SmallCard( "pieterm2","Paris", "France" ),
        SmallCard( "givan1_2","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands"),
        SmallCard( "pieterm1","Amsterdam", "Netherlands" ),
        SmallCard( "pieterm2","Paris", "France" ),
        SmallCard( "givan1_2","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands")
    )