<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreProduct extends Model
{
    use HasFactory;
    protected $fillable = [
        'price',
        'stock',
        'product_ıd',
        'store_id'
      ];
}