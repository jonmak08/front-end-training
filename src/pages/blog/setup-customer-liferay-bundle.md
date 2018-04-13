---
title: "Setup a Customer Liferay Bundle"
description: "How to Setup a Customer Liferay Bundle that uses a MySQL database."
date: "April 13, 2018"
author: "Jeremy Fu"
layout: "blog"
---

<article>

{$page.description}

1. Download the latest [customer_lportal file](https://files.liferay.com/private/lrdcom/) and unzip the file.
2. Open up your *Terminal/Git Bash* and run ```mysql -u root -p``` to login to your MySQL, followed by the root password that you setup when configuring MySQL.
3. Run ```create database YOUR_DATABASE_NAME;``` to create a database with your preferred name. 
4. Check to see if you successfully created the database by using ```show database```.
    ```shell
    mysql> show databases;

    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | YOUR_DATABASE_NAME |
    | mysql              |
    | performance_schema |
    | sakila             |
    | test               |
    | world              |
    +--------------------+
    7 rows in set (0.01 sec)
    ```
5. Run ```use YOUR_DATABASE_NAME;``` to switch to your database. 
6. Copy the path to your customer_lportal file and insert it into the following command in your *Terminal/Git Bash*: ```source YOUR_PATH;```. This will dump the data into your database.
7. Download and extract the current [DXP service pack bundle](https://files.liferay.com/private/ee/portal/7.0.10.3/liferay-dxp-digital-enterprise-tomcat-7.0-sp3-20170503123037723.zip). It may help if you rename it with a simpler name and place it with the rest of your bundles.
8. Navigate to the osgi/configs directory within your bundle and paste in [these config files](https://drive.google.com/drive/folders/0B0_9aJ594_bbb1BXTmJfQUNYMk0?usp=sharing).
9. Download the latest [patching-tool](https://web.liferay.com/group/customer/dxp/downloads/digital-enterprise/patching-tool) if the version is outdated, and replace the patching-tool folder in your bundle.
    - You can check the patching-tool version by running ```patching-tool.bat version``` within the folder. If using linux, run ```./patching-tool.sh version```.
10. Run ```patching-tool.bat info``` to check that there are no patches installed. The output should look something like this:
    ```shell
    C:\YOUR_BUNDLES_PATH\patching-tool>patching-tool.bat info
    Loading product and patch information...
    Product information:
      * installation type: binary
      * build number: 7010
      * service pack version:
        - available SP version: 6
        - installable SP version: 6
      * patching-tool version: 2.0.6
      * time: 2018-04-13 00:26Z
      * plugins: OSB EE, OSB EE, OSB Knowledge Base, OSB Support

    Currently installed patches:
    Available patches:
    ```
    - If there is an error, use ```patching-tool.bat auto-discovery``` to set up the environment for property files.
    - If there is a patch installed, use ```patching-tool.bat revert``` within the patching-tool folder to revert the bundle to the first release.
11. Download the appropriate [fixpack](https://files.liferay.com/private/ee/fix-packs/7.0.10/de/) and [hotfix](https://files.liferay.com/private/ee/fix-packs/7.0.10/hotfix/) files and move the zipped files into the patching-tool/patches directory of your bundle folder. *Ask your team lead if you're not sure which versions to use.*
12. Run ```patching-tool.bat install``` to install the patches, then check to make sure the packages were installed.
13. Copy this [portal-ext.properties](https://drive.google.com/a/liferay.com/file/d/0B0_9aJ594_bbOG9sclFvMVhBcms/view?usp=sharing) file into your bundle and edit the following paths:
    ```shell
    jdbc.default.driverClassName=com.mysql.jdbc.Driver
    jdbc.default.url=jdbc:mysql://localhost/YOUR_DATABASE_NAME?characterEncoding=UTF-8&dontTrackOpenResources=true&holdResultsOpenOverStatementClose=true&useFastDateParsing=false&useUnicode=true
    jdbc.default.username=root
    jdbc.default.password=YOUR_PASSWORD
    ```
    - Leave the password blank if none was set during setup.
14. Set ```database.indexes.update.on.startup=false``` and insert the following lines to prevent elastic search from slowing down your server startup:
    ```shell
    index.on.startup=false
    index.on.upgrade=false
    module.framework.properties.lpkg.index.validator.enabled=false
    ```
15. Edit the setenv.bat file (setenv.sh on linux) in your bundle\tomcat-X.X.XX\bin folder, and replace ```-Xmx1024m -XX:MaxPermSize=384m``` with ```-XX:MaxMetaspaceSize=768m```.
16. Download and extract the platform independent [JDBC driver](https://dev.mysql.com/downloads/connector/j/) zip file for MySQL. Then move the mysql-connector-java-XXX.jar file to your bundle/tomcat-X.X.XX/lib/ext directory and rename it as mysql.jar.
17. Sign in to your liferay.com account and navigate to Account Home > License. From there, click **Generate New License** and enter in the following values:
    - **Product:** Digital Enterprise Development
    - **Liferay Version:** 7.0
    - **Type:** Digital Enterprise Development (Developer)
18. Click on **Choose** followed by **Generate**, then download the license file and move it to your bundle/deploy folder. Create one if necessary.
19. Copy the [Liferay Knowledge Base.lpkg](https://drive.google.com/a/liferay.com/file/d/0B0_9aJ594_bbVG5EaVhlVFF3Y1U/view?usp=sharing) into your bundles/deploy folder.
20. Build your osb-customer-api, osb-customer-auto-deploy-listener, osb-customer-knowledge-base-theme, osb-customer-service, and osb-customer-web using ```gradlew deploy``` and copy the jar files from your liferay-portal-ee/tools/sdk/dist folder into your bundles/deploy folder.
21. Run ```catalina.bat run``` from the bundle/tomcat-X.X.XX/bin directory. Your bundle is now set up.
</article>