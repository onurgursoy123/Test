<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Store;

class StoreController extends Controller
{   
    public function stores(Request $request)
    {
        $data = $request-> only ('store_name', 'tax_number', 'tel_number', 'status');
        $validator = Validator::make($data, [
            'store_name' => 'required',
            'tax_number' => 'required',
            'tel_number' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=> $validator->messages()],200);
        }
      $store=new Store;
      $store->store_name= $request->store_name;
      $store->tax_number= $request->tax_number;
      $store->tel_number= $request->tel_number;
      $store->status= $request->status;
      $result=$store->save();
      if($result){
        return $store;
      }
      else{
        return 'Hatalı İşlem';
      }
    }


    public function getStores(){
        return Store::all();
    }
}
