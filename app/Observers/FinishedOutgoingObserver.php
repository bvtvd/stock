<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/12/25
 * Time: 19:59
 */

namespace App\Observers;


use App\Model\FinishedOutgoing;
use App\Services\FinishedOutgoing\FinishedOutgoingService;

class FinishedOutgoingObserver
{

    protected $finishedOutgoingService;

    public function __construct(FinishedOutgoingService $finishedOutgoingService)
    {
        $this->finishedOutgoingService = $finishedOutgoingService;
    }


    /**
     * 1. 检查出库是否收支平衡, 更改 balance 值为 1
     */
    public function created(FinishedOutgoing $outgoing)
    {
        $this->finishedOutgoingService->updateBalance($outgoing);

    }

    /**
     * 1. 检查出库是否收支平衡, 更改 balance 值为 1
     */
    public function updated(FinishedOutgoing $outgoing)
    {
        $this->finishedOutgoingService->updateBalance($outgoing);
    }
}