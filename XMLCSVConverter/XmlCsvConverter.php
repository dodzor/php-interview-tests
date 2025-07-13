<?php

namespace XmlCsvConverter;

class XmlCsvConverter
{
    public function loadXml(string $xmlString): array
    {
        // TODO: Parse and return XML as array
        $xml = simplexml_load_string($xmlString);
        $movies = [];
        foreach ($xml->movie as $movie) {
            $movies[] = [
                'title' => (string) $movie->title,
                'year' => (string) $movie->year,
                'genre' => (string) $movie->genre
            ];
        }
        return $movies;
    }

    public function convertToCsv(array $data): string
    {
        // Handle empty data
        if (empty($data)) {
            return '';
        }

        // Open a temporary in-memory file
        $output = fopen('php://temp', 'r+');
        
        // Write the header row
        fputcsv($output, array_keys($data[0]), ',', '"', '\\');
        
        // Write the data rows
        foreach ($data as $row) {
            fputcsv($output, $row, ',', '"', '\\');
        }
        // Rewind pointer to the beginning of the stream
        rewind($output);

        // Read the stream into a string
        return stream_get_contents($output);
    }

    public function filterByField(array $data, string $field, string $value): array
    {
        return array_filter($data, function($row) use ($field, $value) {
            return isset($row[$field]) && $row[$field] === $value;
        });
    }
}
