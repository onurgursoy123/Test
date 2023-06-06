<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_name',
    ];
    public function subcategory()
    {
        return $this->hasMany(SubCategory::class, 'id', 'category_id');
    }
}
