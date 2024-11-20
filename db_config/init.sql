-- creates the table for messages. add other desired startup tables here

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER NOT NULL,
    student_name VARCHAR(255) NOT NULL,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);