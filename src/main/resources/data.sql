insert into users (dtype, id, username, password, name, surname, email, enabled,last_password_reset_date, first_time)values('User',1,'admin','$2a$10$c7jv8zcmZoNkjkLZAdTE5OmvmPddtMzMn6GLYt62lymTYu5vdpfpG','Stojko', 'Stojanovic', 'stojko@example.com', true, '2019-04-28 21:00:00', true);
insert into authority (id, name) values (1, 'ROLE_SYSTEM_ADMIN');
insert into user_authority (user_id, authority_id) values(1,1);
insert into airline (id,name,address, description, image ) values (1, 'JAT','Batajnica', 'Low cost', 'images/airline1.jpg');
insert into users (email, enabled, first_time, last_password_reset_date, name, password, surname, username, airline_id, dtype, id) values ('bobic@gmail.com', 1, 1, '2019-04-28 21:00:00', 'Bob', '$2a$10$c7jv8zcmZoNkjkLZAdTE5OmvmPddtMzMn6GLYt62lymTYu5vdpfpG', 'Bobic', 'avion', 1, 'AirlineAdmin', 2);
insert into authority (id, name) values (2, 'ROLE_AIRLINE_ADMIN');
insert into user_authority (user_id, authority_id) values(2,2);
insert into users (dtype, id, username, password, name, surname, email, enabled,last_password_reset_date, first_time) values ( 'RegisteredUser', 3, 'user1', '$2a$10$c7jv8zcmZoNkjkLZAdTE5OmvmPddtMzMn6GLYt62lymTYu5vdpfpG','Marko', 'Markovic', 'isamrstest2019+user1@gmail.com',1, '2019-04-28 20:00:00', 0);
insert into authority (id, name) values (3, 'ROLE_USER');
insert into user_authority (user_id, authority_id) values(3,3);
insert into users (dtype, id, username, password, name, surname, email, enabled,last_password_reset_date, first_time) values ( 'RegisteredUser', 4, 'user2', '$2a$10$c7jv8zcmZoNkjkLZAdTE5OmvmPddtMzMn6GLYt62lymTYu5vdpfpG','Tamara', 'Markovic', 'isamrstest2019+user2@gmail.com',1, '2019-04-28 20:00:00', 0);
insert into authority (id, name) values (4, 'ROLE_USER');
insert into user_authority (user_id, authority_id) values(4,4);
insert into users (dtype, id, username, password, name, surname, email, enabled,last_password_reset_date, first_time) values ( 'RegisteredUser', 5, 'user3', '$2a$10$c7jv8zcmZoNkjkLZAdTE5OmvmPddtMzMn6GLYt62lymTYu5vdpfpG','Marko', 'Savic', 'isamrstest2019+user3@gmail.com',1, '2019-04-28 20:00:00', 0);
insert into authority (id, name) values (5, 'ROLE_USER');
insert into user_authority (user_id, authority_id) values(5,5);