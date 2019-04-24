DELETE FROM chapters
WHERE book_id = $1;
DELETE FROM books
WHERE id = $1
