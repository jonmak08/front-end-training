---
title: "Setup MySQL"
description: "How to use Liferay with a MySQL database."
date: "August 15, 2014"
author: "Drew Brokke"
layout: "blog"
---

<article>

{$page.description}

When you work on bug fixes, you will sometimes see an environment specification (*Tomcat 7.0.25 + MYSQL5.0. 6.1.x GIT ID: 6d6b8814da7c7295ed4cab8420e070793361f856*) in the details section of a JIRA ticket. The second parameter tells what database is in use when the bug was discovered.

When you initially setup Liferay you were using a non-production database called *HSQL*. *HSQL* will be sufficient for most of the tasks you do, but in case you need to interact with the database, you will need to use MySQL. This section shows you how to set up MySQL.

1. Download and install MySQL at [http://dev.mysql.com/downloads](http://dev.mysql.com/downloads).
    *You can set the root password as empty by leaving the root password field blank while setting up.*
2. Add the path to the MySQL *bin* folder to your environment *PATH* variable
3. Open up our *Terminal/Git Bash* and type the following command.
    ```shell
    mysql -u root -p
    ```
4. Enter the root password that you setup when configuring MySQL.
5. If everything is set up correctly, you should see the following output in your *Terminal/Git Bash*.
    ```shell
    C:\Windows\system32>mysql -u root -p
    Enter password:
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 1
    Server version: 5.6.14 MySQL Community Server (GPL)

    Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    mysql>
    ```
6. Create a database called **lportal**  by running the following command in your *Terminal/Git Bash*.
    ```shell
    mysql> create database lportal;
    ```
7. Check to see if you successfully created the database  by running the following command in your *Terminal/Git Bash*.
    ```shell
    mysql> show databases;

    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | lportal            |
    | mysql              |
    | performance_schema |
    | sakila             |
    | test               |
    | world              |
    +--------------------+
    7 rows in set (0.01 sec)
    ```
8. Configure MySQL in your ```portal-ext.properties``` file by adding the following lines to your file.
    ```shell
    jdbc.default.driverClassName=com.mysql.jdbc.Driver
    jdbc.default.url=jdbc:mysql://localhost/lportal?useUnicode=true&characterEncoding=UTF-8&useFastDateParsing=false
    jdbc.default.username=
    jdbc.default.password=
    ```
    - You need to update the database name if you used a different name than *lportal* when you created your database.
    - If you didn't specify a username when configuring MySQL, the username is "root" by default. Append the username after *jdbc.default.username=*.
    - If you didn't specify a password when configuring MySQL, keep it blank, but if you did, then append the password after *jdbc.default.password=*.
9. Save the ```portal-ext.properties``` file and start Tomcat. Look for the following messages in your *Terminal/Git Bash*.
    ```shell
    INFO: Initializing Spring root WebApplicationContext
    INFO  [localhost-startStop-1][DialectDetector:117] Determine dialect for MySQL 5
    INFO  [localhost-startStop-1][DialectDetector:117] Found dialect org.hibernate.dialect.MySQLDialect
    ````
10. Liferay portal is now running with a MySQL database!

</article>