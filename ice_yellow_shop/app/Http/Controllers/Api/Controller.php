<?php

namespace App\Http\Controllers\Api;

use App\Http\Middleware\Auth;

class Controller extends \App\Http\Controllers\Controller
{
	protected static $user;

	/**
	 * Controller constructor.
	 */
	public function __construct()
	{
		self::$user = Auth::authenticate();
	}
}