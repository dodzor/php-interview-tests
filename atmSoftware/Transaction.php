<?php

class Transaction {
    private $type;
    private $amount;
    private $timestamp;

    public function __construct(string $type, float $amount) {
        $this->type = $type;
        $this->amount = $amount;
        $this->timestamp = time();
    }

    public function getSummary(): string {
        return strtoupper($this->type) . " of {$this->amount} at " . date('Y-m-d H:i:s', $this->timestamp) . PHP_EOL;
    }
}
