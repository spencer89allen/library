  
UPDATE chapters
SET chapter_number= $2, chapter_title= $3, chapter_notes= $4
WHERE id = $1
RETURNING *;
