<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

class SystemController extends Controller
{
    public function databaseBackup()
    {
        set_time_limit(0);

        // 下载之前先清理以前的备份
        Storage::deleteDirectory('backup');


        Artisan::call('backup:run', [
            '--only-db' => '1',
            '--disable-notifications' => '1',
        ]);

        $files = Storage::files('/backup');

        $recentFile = array_pop($files);

        return response()->download(storage_path('app/public/' . $recentFile));
    }
}
