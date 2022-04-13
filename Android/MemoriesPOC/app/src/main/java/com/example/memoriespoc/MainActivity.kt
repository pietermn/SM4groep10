package com.example.memoriespoc

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.os.Bundle
import android.provider.MediaStore
import android.widget.Button
import android.widget.ImageView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.example.memoriespoc.R
import com.example.memoriespoc.fragment.CameraFragment


public class MainActivity : AppCompatActivity() {
//    private val cameraRequest = 1888
//    lateinit var imageView: ImageView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        title = "Memories PoC"
    savedInstanceState ?: supportFragmentManager.beginTransaction()
        .replace(R.id.container, CameraFragment.newInstance())
        .commit()


//        if (ContextCompat.checkSelfPermission(applicationContext, Manifest.permission.CAMERA)
//            == PackageManager.PERMISSION_DENIED)
//            ActivityCompat.requestPermissions(this, arrayOf(Manifest.permission.CAMERA), cameraRequest)
//        imageView = findViewById(R.id.imageView)
//        val photoButton: Button = findViewById(R.id.button)
//        photoButton.setOnClickListener {
//            val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
//            startActivityForResult(cameraIntent, cameraRequest)
//        }
    }
//    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
//        super.onActivityResult(requestCode, resultCode, data)
//        if (requestCode == cameraRequest) {
//            val photo: Bitmap = data?.extras?.get("data") as Bitmap
//            imageView.setImageBitmap(photo)
//        }
//    }
}