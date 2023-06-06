<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\SubCategory;

class SubCategoryController extends Controller
{
    public function addd(Request $request)
    {
        $data = $request-> only ('sub_name','main_category_id');
        $validator = Validator::make($data, [
            'sub_name' => 'required',
            'main_category_id' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=> $validator->messages()],200);
        }
      $subcategory=new SubCategory;
      $subcategory->sub_name= $request->sub_name;
      $subcategory->main_category_id= $request->main_category_id;
      $result=$subcategory->save();
      if($result){
        return $subcategory;
      }
      else{
        return 'Hatalı İşlem';
      }
    }


    public function getSubCategories(){
        return SubCategory::all();
    }
}