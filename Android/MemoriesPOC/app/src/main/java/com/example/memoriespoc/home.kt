package com.example.memoriespoc

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import com.example.memoriespoc.databinding.ActivityHomeBinding
import com.example.memoriespoc.util.getBigCards
import com.example.memoriespoc.util.getSmallCards
import kotlinx.android.synthetic.main.activity_home.view.*

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
            var intent = Intent(this.requireActivity(), MostPopularPlaces::class.java)
            startActivity(intent)
        }

        binding.lblSeeAll2.setOnClickListener {
        }

        return view
    }


}