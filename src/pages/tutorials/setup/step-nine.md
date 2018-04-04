---
title: "Step 9: Compiling Liferay's source code"
description: "Learn how to compile Liferay's source code."
buttonTitle: "Step 9 Complete"
parentId: "setup"
layout: "tutorial"
weight: 9
---

## {$page.title}

Now that we have Liferay setup and configured, we can start compiling the *source* code to get Liferay running.

### Getting an application server

If we want to use Liferay's default setup, we need to get Apache Tomcat on our machine.

1. Open a *Terminal/Git Bash* window.
2. Navigate to the cloned Liferay *source* code folder.
3. Run the command below to download Apache Tomcat.
    ```shell
    ant -f build-dist.xml unzip-tomcat
    ```
    * This command tells ant to look in the ```build-dist.xml``` file and execute the **unzip-tomcat** command.
    * Ant will delete preexisting folder names matching the application server directory defined in the ```app.server._USER\_NAME_.properties``` file.
    * Ant will download the version of Apache Tomcat defined in the ```app.server._USER\_NAME_.properties``` file.
    * Ant will install Apache Tomcat to the folder specified in the ```app.server._USER\_NAME_.properties``` file
4. If this Ant task is successful, you will see a similar output as below.
    ```shell
    Buildfile: PATH/liferay-portal/build-dist.xml
    ...
    BUILD SUCCESSFUL
    Total time: NNN seconds
    ```

### Compiling the source code

Now that everything is setup, we can compile Liferay's *source* code.

1. Open a *Terminal/Git Bash* window.
2. Navigate to the cloned Liferay' *source* code folder.
3. Run the following command to setup Liferay.
    ```shell
    ant setup-sdk
    ```
4. If this Ant task is successful, you will see a similar output as below.
    ```shell
    Buildfile: PATH/liferay-portal/build.xml
    ...
    BUILD SUCCESSFUL
    Total time: NNN minutes NNN seconds
    ```
5. Compile Liferay's *source* code by running the following command.
    ```shell
    ant all
    ```
6. If this Ant task is successful, you will see a similar output as below.
    ```shell
    Buildfile: PATH/liferay-portal/build.xml
    ...
    BUILD SUCCESSFUL
    Total time: NNN minutes NNN seconds
    ```
7. Navigate to the ```bin``` folder in the Apache Tomcat application server folder. (e.g. ```liferay-portal/tomcat-8.0.32/bin```).
8. Start Apache Tomcat by running the following command.
    **OS X/Linux**
    ```shell
    ./catalina.sh run
    ```

    **Windows**
    ```shell
    catalina.bat run
    ```

    We use catalina instead of the startup executables so that we can conveniently see the console and any errors that it may throw.
9. Open a web browser and go to  *http://localhost:8080*.
10. Login to Liferay using the following credentials.
    **Username**
    ```shell
    test@liferay.com
    ```

    **Password**
    ```shell
    test
    ```
11. To stop the server, go to the *Terminal/Git Bash* window and hit ```CTRL + c```.