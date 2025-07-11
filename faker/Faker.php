<?php

namespace Faker;

class Faker
{
    public function getRandomName(): string
    {
        $firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'];
        $lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'];

        return $firstNames[array_rand($firstNames)] . ' ' . $lastNames[array_rand($lastNames)];
    }

    public function getRandomEmail(): string
    {
        $names = ['user', 'admin', 'guest', 'demo'];
        $domains = ['example.com', 'test.com', 'demo.com', 'localhost'];

        return $names[array_rand($names)] . rand(100, 999) . '@' . $domains[array_rand($domains)];
    }

    public function getRandomPhoneNumber(): string
    {
        $prefixes = ['+1', '+40', '+44', '+39', '+34', '+33', '+31'];
        $numbers = rand(1000000000, 9999999999);

        return $prefixes[array_rand($prefixes)] . $numbers;
    }

    public function anonymizeUser(array $user): array
    {
        return [
            'name' => $this->getRandomName(),
            'email' => $this->getRandomEmail(),
            'phone' => $this->getRandomPhoneNumber(),
        ];
    }
}
