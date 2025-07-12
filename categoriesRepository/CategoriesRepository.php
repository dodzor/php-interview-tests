<?php

namespace CategoriesRepository;

use PDO;

class CategoriesRepository {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getMoviesByCategory(string $category): array
    {
       $sql = "SELECT * FROM movies WHERE category = :category";
       $stmt = $this->pdo->prepare($sql);
       $stmt->execute(['category' => $category]);
       return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getAllCategories(): array
    {
        $sql = "SELECT DISTINCT category FROM movies";
        $stmt = $this->pdo->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getTopRatedMoviesInCategory(string $category): array
    {
        $sql = "SELECT * FROM movies WHERE category = ? ORDER BY rating DESC LIMIT 5";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$category]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
