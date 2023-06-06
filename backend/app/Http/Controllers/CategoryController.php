<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class CategoryController extends Controller
{
    public function add(Request $request)
    {
        $data = $request-> only ('category_name');
        $validator = Validator::make($data, [
            'category_name' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=> $validator->messages()],200);
        }
      $category=new Category;
      $category->category_name= $request->category_name;
      $result=$category->save();
      if($result){
        return $category;
      }
      else{
        return 'Hatalı İşlem';
      }
    }


    public function getCategories(){
        return Category::all();
    }
}
