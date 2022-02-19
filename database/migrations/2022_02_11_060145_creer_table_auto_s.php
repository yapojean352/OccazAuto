<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreerTableAutoS extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('autos', function (Blueprint $table) {
             $table->id();
            $table->string('marque');
            $table->string('modele');
            $table->string('prix');
            $table->string('km');
            $table->string('carrosserie');
            $table->string('couleur');
            $table->string('immatriculation');
            $table->string('carburant');
            $table->string('transmission');
            $table->string('details');
            $table->string('annee');
            $table->string('address_address')->nullable();
            $table->double('address_latitude')->nullable();
            $table->double('address_longitude')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('autos');
    }
}
