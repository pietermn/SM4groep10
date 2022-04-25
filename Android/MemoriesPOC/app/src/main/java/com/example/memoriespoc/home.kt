package com.example.memoriespoc

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityHomeBinding

private lateinit var binding: ActivityHomeBinding

class home : Fragment() {
    override fun onCreateView(
        view: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val packageName = getActivity()?.getPackageName()
        binding = ActivityHomeBinding.inflate(layoutInflater)
        val view = binding.root

        getBigCards().forEach{
            val inflater = LayoutInflater.from(this.requireActivity()).inflate(R.layout.home_bigcard, null)

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
            val inflater = LayoutInflater.from(this.requireActivity()).inflate(R.layout.home_smallcard, null)

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
        }
        binding.lblSeeAll2.setOnClickListener {
        }

        return view
    }


}

data class BigCard(val date: String, val back: String, val front: String)

fun getBigCards() = listOf(
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
    SmallCard("img_couple","Beringe", "Netherlands")
)