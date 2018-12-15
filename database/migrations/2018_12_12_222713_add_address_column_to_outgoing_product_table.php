<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAddressColumnToOutgoingProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outgoing_product', function (Blueprint $table) {
            $table->string('address')->nullable()->comment('退货入库地点');
            $table->decimal('storage_money', 11, 2)->nullable()->comment('入库金额');
            $table->integer('minus_from')->nullable()->comment('outgoing_product_id, 退货入库来源');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('outgoing_product', function (Blueprint $table) {
            $table->dropColumn(['address', 'storage_money']);
        });
    }
}
