package com.example.memoriespoc.util

data class BigCard(val date: String, val back: String, val front: String)

    fun getBigCards() = listOf(
        BigCard( "22-02-2022","img_view", "img_couple" ),
        BigCard( "10-02-2022","img_view", "img_view" ),
        BigCard( "01-02-2022","img_couple", "img_couple" ),
        BigCard( "20-01-2022","img_view", "img_couple" ),
        BigCard("18-01-2022","img_view", "img_couple")
    )

    data class SmallCard(val image: String, val city: String, val country: String)

    fun getSmallCards() = listOf(
        SmallCard( "img_couple","Amsterdam", "Netherlands" ),
        SmallCard( "img_view","Paris", "France" ),
        SmallCard( "img_couple","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands"),
        SmallCard( "img_couple","Amsterdam", "Netherlands" ),
        SmallCard( "img_view","Paris", "France" ),
        SmallCard( "img_couple","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands"),
        SmallCard( "img_couple","Amsterdam", "Netherlands" ),
        SmallCard( "img_view","Paris", "France" ),
        SmallCard( "img_couple","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands"),
        SmallCard( "img_couple","Amsterdam", "Netherlands" ),
        SmallCard( "img_view","Paris", "France" ),
        SmallCard( "img_couple","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands"),
        SmallCard( "img_couple","Amsterdam", "Netherlands" ),
        SmallCard( "img_view","Paris", "France" ),
        SmallCard( "img_couple","Berlin", "Germany" ),
        SmallCard( "img_view","Antwerp", "Belgium" ),
        SmallCard("img_couple","Beringe", "Netherlands")
    )

