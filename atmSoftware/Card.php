<?php

class Card {
    private $pin;
    private $cardNumber;

    public function __construct(string $pin, string $cardNumber) {
        $this->pin = $pin;
        $this->cardNumber = $cardNumber;
    }

    public function validatePin(string $pin): bool {
        return $this->pin === $pin;
    }

    public function getCardNumber(): string {
        return $this->cardNumber;
    }
}
