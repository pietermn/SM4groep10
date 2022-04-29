package com.example.memoriespoc.util

import java.io.Serializable

    data class Data (
        val date: String,
        val back: String,
        val front: String,
        val city: String,
        val country: String
    ) : Serializable

    fun getData() = listOf(
        Data( "22-02-2022","givan1_1", "givan1_2", "Amsterdam", "Netherlands" ),
        Data( "10-02-2022","pietern1", "pietern2","Paris", "France" ),
        Data( "01-02-2022","pieterm1", "pieterm2","Berlin", "Germany" ),
        Data( "20-01-2022","givan2_1", "givan2_2","Antwerp", "Belgium" ),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands"),
        Data( "22-02-2022","givan1_1", "givan1_2", "Amsterdam", "Netherlands" ),
        Data( "10-02-2022","pietern1", "pietern2","Paris", "France" ),
        Data( "01-02-2022","pieterm1", "pieterm2","Berlin", "Germany" ),
        Data( "20-01-2022","givan2_1", "givan2_2","Antwerp", "Belgium" ),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands"),
        Data( "22-02-2022","givan1_1", "givan1_2","Amsterdam", "Netherlands" ),
        Data("18-01-2022","img_view", "img_couple","Beringe", "Netherlands")
    )