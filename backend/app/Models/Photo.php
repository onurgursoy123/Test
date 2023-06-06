<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;
    protected $table = 'photo';
    protected $fillable = [
     'imageable_id',
     'imageable_type',
     'imageable_path',
     'type',
    ];
    public function product()
    {
        return $this->hasMany(Product::class, 'id', 'photo_id');
    }
}
