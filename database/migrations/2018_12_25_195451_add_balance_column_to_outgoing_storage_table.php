<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddBalanceColumnToOutgoingStorageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('outgoing_storage', function (Blueprint $table) {
            $table->boolean('balance')->nullable()->default(false)->comment('收支是否平衡');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('outgoing_storage', function (Blueprint $table) {
            $table->dropColumn(['balance']);
        });
    }
}
