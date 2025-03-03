<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Auto-increment primary key
            $table->string('name', 255);
            $table->string('email', 191)->unique();
            $table->string('password', 255);
            $table->enum('role', ['admin', 'student'])->default('student');
            $table->unsignedBigInteger('classroom_id'); // Foreign key to classrooms
            $table->timestamp('created_at')->useCurrent();

            // Foreign key constraint
            $table->foreign('classroom_id')->references('id')->on('classrooms')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
