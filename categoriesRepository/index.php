<?php

require_once __DIR__ . '/../vendor/autoload.php';

use CategoriesRepository\CategoriesRepository;

$dsn = "mysql:host=localhost;dbname=tests;";

$pdo = new PDO($dsn, 'root', '');
$repository = new CategoriesRepository($pdo);

$movies = $repository->getMoviesByCategory('Action');
print_r("Movies by category: ");
print_r($movies);

$categories = $repository->getAllCategories();
print_r("All categories: ");
print_r($categories);

$topRatedMovies = $repository->getTopRatedMoviesInCategory('Action');
print_r("Top rated movies in category: ");
print_r($topRatedMovies);