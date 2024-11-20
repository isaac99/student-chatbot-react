-- Create the teachers table
CREATE TABLE teachers (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    -- other fields as necessary
);

-- Create the messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    teacher_id UUID NOT NULL REFERENCES teachers(id),
    student_name VARCHAR(255) NOT NULL,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
