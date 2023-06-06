<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'description',
        'sub_id',
        'image_id'
    ];
    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_id', 'id');
    }
    public function photo()
    {
        return $this->belongsTo(Photo::class, 'image_id', 'id');
    }
    
}
