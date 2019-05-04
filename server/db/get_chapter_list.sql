SELECT * FROM chapters
WHERE book_id = $1
ORDER BY chapter_number;