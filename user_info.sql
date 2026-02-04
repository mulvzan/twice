-- Based on the data structure found in src/Dashboard.tsx, here is a possible SQL schema and some sample data.
-- I am assuming a table named 'user_info' with a primary key 'id'.

-- DDL (Data Definition Language) for creating the table
CREATE TABLE IF NOT EXISTS user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    address TEXT
);

-- DML (Data Manipulation Language) for inserting sample data
-- This data is taken from the commented-out 'dataSource' in the Dashboard component.
INSERT INTO user_info (name, age, address) VALUES ('胡彦斌', 32, '西湖区湖底公园1号');
INSERT INTO user_info (name, age, address) VALUES ('胡彦祖', 42, '西湖区湖底公园1号');
INSERT INTO user_info (name, age, address) VALUES ('张三', 25, '北京市朝阳区');
INSERT INTO user_info (name, age, address) VALUES ('李四', 38, '上海市浦东新区');
INSERT INTO user_info (name, age, address) VALUES ('王五', 50, '广东省深圳市南山区');

