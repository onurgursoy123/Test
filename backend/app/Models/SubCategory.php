<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    protected $fillable = [
        'sub_name',
        'main_category_id',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class, 'main_category_id', 'id');
    }
    public function product()
    {
        return $this->hasMany(Product::class, 'id', 'sub_id');
    }
}
