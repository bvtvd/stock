<?php

namespace App\Providers;

use App\Model\FinishedOutgoing;
use App\Observers\FinishedOutgoingObserver;
use Illuminate\Support\ServiceProvider;

class ModelObserveServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        FinishedOutgoing::observe(FinishedOutgoingObserver::class);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
