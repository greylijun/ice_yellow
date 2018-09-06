<?php

namespace App\Http\Controllers\Api;

use App\Image;

/**
 * Class HomeController
 * @package App\Http\Controllers\Api
 */
class HomeController extends Controller
{
	/**
	 * @return array
	 */
	public function slider()
	{
		$imageModel = new Image;
		$data = $imageModel->slider();
		return $data;
	}
}