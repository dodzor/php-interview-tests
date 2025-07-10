<?php

include 'Account.php';
include 'ATM.php';
include 'Card.php';
include 'Transaction.php';

$account = new Account(1000);
$atm = new ATM($account);

echo "Balance: {$atm->checkBalance()}" . PHP_EOL;

$card = new Card('1234', '1234567890');
if ($card->validatePin('1234')) {
    $success = $atm->withdraw(90);
    $trans = new Transaction('withdraw', 90);
    echo $trans->getSummary();
    $success = $atm->deposit(200);
    $trans = new Transaction('deposit', 200);
    echo $trans->getSummary();
}

echo "Balance: {$atm->checkBalance()}" . PHP_EOL;
