<?php
/**
 * Created by PhpStorm.
 * User: Hans
 * Date: 2018/12/25
 * Time: 20:07
 */

namespace App\Services\FinishedOutgoing;


use App\Model\FinishedOutgoing;

class FinishedOutgoingService
{
    /**
     * 更新 Balance 状态
     * 如果应收金额 减去 以后已收金额与退货金额之和, 则 将其状态改为1
     */
    public function updateBalance(FinishedOutgoing $outgoing)
    {
        \Log::info('updateBalance outgoing_storage id: '. $outgoing->id);
        // 检查是否需要修改
        if($this->needUpdateBalance($outgoing)){

            $returnMoney = $this->getReturnedSumByContractNumber($outgoing->contract_number);

            \Log::info('return money: '.(string) $returnMoney);

            $receivableMoney = bcsub($outgoing->receivable_money, $returnMoney);

            if(0 === bccomp($receivableMoney, $outgoing->received_money)){
                // 收支已平衡
                // 直接调用或造成死循环
//                $outgoing->update([
//                    'balance' => FinishedOutgoing::BALANCE
//                ]);
                \DB::table('outgoing_storage')->where('id', $outgoing->id)->update([
                    'balance' => FinishedOutgoing::BALANCE
                ]);
            }
        }
    }

    /**
     * 是否需要更新 balance 字段
     * @param FinishedOutgoing $outgoing
     * @return bool
     */
    public function needUpdateBalance(FinishedOutgoing $outgoing)
    {
        return $outgoing->outgoing_type != FinishedOutgoing::OUTGOING_TYPE_RETURN;
    }


    /**
     * 根据合同号获取退货入库的总金额
     * @param $contractNumber
     */
    public function getReturnedSumByContractNumber($contractNumber)
    {
        $return = FinishedOutgoing::where('contract_number', $contractNumber)
            ->where('outgoing_type', FinishedOutgoing::OUTGOING_TYPE_RETURN)
            ->get();

        return $return->isNotEmpty() ? abs($return->sum('receivable_money')) : 0;
    }
}