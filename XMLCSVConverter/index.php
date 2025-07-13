<?php

require_once __DIR__ . '/../vendor/autoload.php';

use XmlCsvConverter\XmlCsvConverter;

$converter = new XmlCsvConverter();

$xmlString = file_get_contents(__DIR__ . '/movies.xml');
$movies = $converter->loadXml($xmlString);
var_dump($movies);

// $csvString = $converter->convertToCsv($movies);
// var_dump($csvString);

$filteredMovies = $converter->filterByField($movies, 'year', '2009');
var_dump($filteredMovies);