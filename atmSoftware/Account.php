<?php

class Account {
    private $balance;

    public function __construct(float $initialBalance = 0) {
        $this->balance = $initialBalance;
    }

    public function debit(float $amount): bool {
        if ($amount >= $this->balance) return false;
        $this->balance -= $amount;

        return true;
    }

    public function credit(float $amount): void {
        $this->balance += $amount;
    }

    public function getBalance(): float {
        return $this->balance;
    }
}
