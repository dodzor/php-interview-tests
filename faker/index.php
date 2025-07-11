<?php

require_once __DIR__ . '/../vendor/autoload.php';

// use Faker\Faker;
use Faker\Factory;

// $faker = new Faker();
$faker = Factory::create();

// var_dump($faker->anonymizeUser([
//     'name' => 'John Doe',
//     'email' => 'john.doe@example.com',
//     'phone' => '1234567890',
// ]));

// Generate fake data using the official Faker library
$fakeData = [
    'name' => $faker->name,
    'email' => $faker->email,
    'phone' => $faker->phoneNumber,
];
var_dump($fakeData);
