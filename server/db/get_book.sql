SELECT id, header_image, title, summary FROM books
    WHERE id = $1;