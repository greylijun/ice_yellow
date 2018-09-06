<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
	protected $fillable =
		[
			'name',
			'introduction',
			'type_id',
			'detail',
			'inventory'
		];

	public function detail($id)
	{
		$res = Good::findOrFail($id)->first();
		$image_res = Image::where('good_id', $id)->get();
		$data = [];
		if ($res) {
			$image = [];
			foreach ($image_res as $row) {
				$image[] = [
					'url' => $row->url,
				];
			}
			$data = $res->toArray();
			$data['image'] = $image;
		}
		return $data;
	}
}
