CREATE TABLE chapters (
    id SERIAL PRIMARY KEY,
    book_id int REFERENCES books(id),
    chapter_number int,
    chapter_title TEXT,
    chapter_notes TEXT
)