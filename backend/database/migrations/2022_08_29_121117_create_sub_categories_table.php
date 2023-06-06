<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {  
        Schema::disableForeignKeyConstraints();
        Schema::create('sub_categories', function (Blueprint $table) {
            $table->id();
            $table->string('sub_name');
            $table->timestamps();
            $table->foreignId("main_category_id")->constranied()->references("id")->on("categories");
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sub_categories');
    }
};
