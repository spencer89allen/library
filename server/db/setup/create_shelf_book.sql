CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES users(id),
    cover_image TEXT,
    header_image TEXT,
    title TEXT,
    author TEXT,
    page_count INTEGER
)