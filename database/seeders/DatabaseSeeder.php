<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PostsTableSeeder::class,
            // Other seeders...
        ]);

        // Create 100 users using the User factory
        User::factory(100)->create();
    }
}
