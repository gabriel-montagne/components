CREATE TABLE IF NOT EXISTS threads (
    id SERIAL PRIMARY KEY,
    owner VARCHAR(200) REFERENCES users(username) ON DELETE CASCADE ON UPDATE CASCADE,
    name VARCHAR(200),
    created TIMESTAMP default now()
);
