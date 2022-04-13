package com.example.memoriesproject

import android.os.Bundle
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.memoriesproject.databinding.ActivityHomeBinding

private lateinit var binding: ActivityHomeBinding

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHomeBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        supportActionBar?.hide()

        getBigCards().forEach{
            val inflater = LayoutInflater.from(this).inflate(R.layout.home_bigcard, null)

            val date: TextView = inflater.findViewById(R.id.date)
            val front: ImageView = inflater.findViewById(R.id.imageFront)
            val back: ImageView = inflater.findViewById(R.id.imageBack)

            date.text = it.date
            val idFront = resources.getIdentifier(it.front, "drawable", packageName)
            front.setImageResource(idFront)
            val idBack = resources.getIdentifier(it.back, "drawable", packageName)
            back.setImageResource(idBack)

            binding.containerBigCard.addView(inflater, binding.containerBigCard.childCount)
        }

        getSmallCards().forEach{
            val inflater = LayoutInflater.from(this).inflate(R.layout.home_smallcard, null)

            val image: ImageView = inflater.findViewById(R.id.image)
            val city: TextView = inflater.findViewById(R.id.txtCity)
            val country: TextView = inflater.findViewById(R.id.txtCountry)

            val id = resources.getIdentifier(it.image, "drawable", packageName)
            image.setImageResource(id)
            city.text = it.city
            country.text = it.country

            binding.containerSmallCard.addView(inflater, binding.containerSmallCard.childCount)
        }

        binding.lblSeeAll1.setOnClickListener {
            Toast.makeText(this, "SeeAll1", Toast.LENGTH_SHORT).show()
        }
        binding.lblSeeAll2.setOnClickListener {
            Toast.makeText(this, "SeeAll2", Toast.LENGTH_SHORT).show()
        }
    }
}

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
    SmallCard("img_couple","Beringe", "Netherlands")
)


