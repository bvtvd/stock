<?php

namespace App\Console\Commands;

use App\Model\FinishedOutgoing;
use App\Services\FinishedOutgoing\FinishedOutgoingService;
use Illuminate\Console\Command;

class BalanceUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'balance:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'update outgoing_storage balance column';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $start = microtime(true);

        $ids = FinishedOutgoing::pluck('id')->all();

        $finishedOutgoingService = new FinishedOutgoingService();

        foreach ($ids as $id){

            $this->line('>> handle id: '. $id);

            $outgoing = FinishedOutgoing::find($id);

            $finishedOutgoingService->updateBalance($outgoing);
        }

        $this->line('mission complete, used '. $this->diff($start, microtime(true)) . 's');
    }

    /**
     * 计算时间差
     * @param $start
     * @param $end
     * @return string
     */
    public function diff($start, $end)
    {
        return bcsub($end, $start, 4);
    }
}
