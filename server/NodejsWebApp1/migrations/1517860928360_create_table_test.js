module.exports = {
    "up": "CREATE TABLE test (test_id INT NOT NULL, UNIQUE KEY test_id (test_id), name TEXT )",
    "down": "DROP TABLE test"
}