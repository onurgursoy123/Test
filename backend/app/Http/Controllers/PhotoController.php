<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Photo;

class PhotoController extends Controller
{
  public function adddd(Request $request)
    {
        $data = $request-> only ('images', 'path', 'type');
        $validator = Validator::make($data, [
            'images' => 'required',
            'path' => 'required',  
            'type' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=> $validator->messages()],200);
        }
      $photo=new Photo;
      $photo->images = $request->images;
      $photo->path = $request->path;
      $photo->type =  $request->type;
      $result=$photo->save();
      if($result){
        return $photo;
      }
      else{
        return 'Hatalı İşlem';
      }
    }


    public function getPhoto(){
        return Photo::all();
    }
}
