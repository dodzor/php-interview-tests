<?php

class ATM {
    private $account;

    public function __construct(Account $account) {
        $this->account = $account;
    }

    public function withdraw(float $amount): bool {
        return $this->account->debit($amount);
    }

    public function deposit(float $amount): void {
        $this->account->credit($amount);
    }

    public function checkBalance(): float {
        return $this->account->getBalance();
    }
}
