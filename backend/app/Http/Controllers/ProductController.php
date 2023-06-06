<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;

class ProductController extends Controller
{
    public function addd(Request $request)
    {
        $data = $request-> only ('product_name', 'sub_id', 'description');
        $validator = Validator::make($data, [
            'product_name' => 'required',
            'description' => 'required',  
            'sub_id' => 'required',
            'image_id' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=> $validator->messages()],200);
        }
      $product=new Product;
      $product->product_name = $request->product_name;
      $product->description = $request->description;
      $product->sub_id =  $request->sub_id;
      $product->image_id = $request->image_id;
      $result=$product->save();
      if($result){
        return $product;
      }
      else{
        return 'Hatalı İşlem';
      }
    }


    public function getProduct(){
        return Product::all();
    }
}
