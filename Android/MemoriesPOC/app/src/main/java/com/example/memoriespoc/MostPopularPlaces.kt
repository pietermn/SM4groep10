package com.example.memoriespoc

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityMostpopularplacesBinding
import com.example.memoriespoc.util.getSmallCards

private lateinit var binding: ActivityMostpopularplacesBinding

class MostPopularPlaces : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMostpopularplacesBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)

        supportActionBar?.hide()

        binding.backButton.setOnClickListener{
            var intent = Intent(this@MostPopularPlaces, MainActivity::class.java)
            startActivity(intent)
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

    }
}