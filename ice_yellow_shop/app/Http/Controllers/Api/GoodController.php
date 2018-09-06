<?php

namespace App\Http\Controllers\Api;

use App\Good;

class GoodController extends Controller
{
	public function show($id)
	{
		$goodModel = new Good;
		$data = $goodModel->detail($id);
		return $data;
	}
}