package com.example.myapplication;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.CardView;
import android.view.View;

public class HomeActivity extends AppCompatActivity implements View.OnClickListener {

    private CardView carddiagnosa;
    private CardView cardinfo;
    private CardView cardtentang;
    private CardView cardbantuan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        carddiagnosa = (CardView) findViewById(R.id.carddiagnosa);
        cardinfo = (CardView) findViewById(R.id.cardinfo);
        cardtentang = (CardView) findViewById(R.id.cardtentang);
        cardbantuan = (CardView) findViewById(R.id.cardbantuan);

        carddiagnosa.setOnClickListener(this);
        cardinfo.setOnClickListener(this);
        cardtentang.setOnClickListener(this);
        cardbantuan.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {

        Intent i;

        switch (v.getId()) {
            case R.id.carddiagnosa:
                i = new Intent(this, MainActivity.class);
                startActivity(i);
                break;
            case R.id.cardinfo:
                i = new Intent(this, InfoActivity.class);
                startActivity(i);
                break;
            case R.id.cardbantuan:
                i = new Intent(this, BantuanActivity.class);
                startActivity(i);
                break;
            case R.id.cardtentang:
                i = new Intent(this, TentangActivity.class);
                startActivity(i);
                break;
            default:
                break;
        }

    }
}
