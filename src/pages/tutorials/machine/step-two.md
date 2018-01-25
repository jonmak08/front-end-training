---
title: "Step 2: Setting up your environment"
description: "Learn how to setup your computer's environment correctly."
buttonTitle: "Step 2 Complete"
parentId: "machine"
layout: "tutorial"
weight: 2
---

## {$page.title}

### Change your computer name

Change your computer name to something more user friendly because we will be using this later on when configuring Liferay.

#### Mac

1. Launch *System Preferences*.
2. Click on *Sharing*.
3. In the *Computer Name:* field, enter what you want your computer name to be.

#### Windows

1. Right click on *My Computer* and choose *Properties*.
2. On the *Computer Name, domain, and workgroup settings* section, click the *Change Settings...* link.
3. Click the *Change...* button under the *Computer Name* tab.
4. In the *Computer Name:* field, enter what you want your computer name to be.

### Change your folder options

Show *hidden* files in the *Finder*/*File Explorer* because Liferay contains hidden files that we need to edit.

#### Mac

1. Launch the *Terminal*.
2. Enter the command below.

    ```shell
    defaults write com.apple.Finder AppleShowAllFiles TRUE
    ```

3. Relaunch the Finder to make the changes take effect.

    ```shell
    killall Finder
    ```

#### Windows

1. Click the *Start Menu* and search for *Folder Explorer Options*.
2. Click on the *View* tab .
3. Under the *Advanced settings:* section, make sure *Show hidden files, folders and drives* is selected.
3. Make sure *Hide extensions for known file types* is unchecked.

### Set ANT_OPTS environment variable

*ANT_OPTS* is an environment variable that provides a list of arguments that you want to pass to the Java Virtual Machine that will run Ant.

#### Mac

1. Create a *.bash_profile* if one does not already exist.
2. Enter the contents below into the *.bash_profile*.
    ```shell
    export ANT_OPTS="-Xms2048m -Xmx4096m"
    ```
3. Relaunch the *Terminal*.

#### Windows

1. Right click on *My Computer* and choose *Properties*.
2. Click on the *Advanced system settings* link.
3. Click on the *Environment Variables...* button.
4. Click on *New...* under the *User variables* section. We will be setting the *ANT_OPTS* environment variable.
5. Fill out the field values with *Variable name:* being **ANT_OPTS** and *Variable value:* being the **-Xms2048m -Xmx4096m**.
6. Click *OK* to save this environment variable.

### Setup Apache Ant

Ant does almost everything for you; it uses scripts to automate tasks and compile Liferay. You should have already downloaded the [Apache Ant](http://ant.apache.org/) in the previous step.  This will help you install and set it up.

#### Windows

1. Unzip the downloaded file from the previous step into your C:\ drive.
2. Go to your Ant directory in the *File Explorer* and copy the path from the address bar.
3. Right click on *My Computer* and choose *Properties*.
4. Click on the *Advanced system settings* link.
5. Click on the *Environment Variables...* button.
6. Click on *New...* under the *System variables* section. We will be setting the *ANT_HOME* environment variable.
7. Fill out the field values with *Variable name:* being **ANT_HOME** and *Variable value:* being the **Apache Ant path you coped in step 2**.
8. Click *OK* to save this environment variable.
9. Verify that the *ANT_HOME* variable is correct.
10. In the *Environment Variables* window, go to the *System variables* section and look for a variable called *PATH* and click *Edit...*.  This variable should already exist and have values in it.
12. **Do not delete this variable**. At the beginning of this variable, enter the code below. We are adding our *ANT_HOME* variable to the *PATH* variable.
    ```shell
    %ANT_HOME%/bin;
    ```
13. Open a new *Command Prompt*.
14. Enter the command below in the *Command Prompt* to make sure Ant is installed correctly. A message *Buildfile: build.xml does not exist! Build failed*.
    ```shell
    ant
    ```

### Setup Java JDK

Liferay is written in Java, so you will need Java on your machine in order to have it run. You should have already downloaded the [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html#jdk-8u101-oth-JPR) in the previous step.  This will help you install and set it up.

#### Mac

1. Double-click the downloaded installer from the previous step. (The installer should be in *.dmg* format).
2. Follow the prompts to install the Java JDK.
3. To check if Java is installed, launch the *Terminal*.
4. Enter the command below in the *Terminal* to make sure Java is installed correctly. A message regarding your Java version should be displayed. Make sure your version displayed matches the Java JDK version you downloaded.
    ```shell
    java -version
    ```

#### Windows

1. Double-click the downloaded installer from the previous step.
2. Follow the prompts to install the Java JDK.
3. Go to your Java JDK directory in the *File Explorer* and copy the path from the address bar.
4. Right click on *My Computer* and choose *Properties*.
5. Click on the *Advanced system settings* link.
6. Click on the *Environment Variables...* button.
7. Click on *New...* under the *System variables* section. We will be setting the *JAVA_HOME* environment variable.
8. Fill out the field values with *Variable name:* being **JAVA_HOME** and *Variable value:* being the **Java JDK path you coped in step 3**.
9. Click *OK* to save this environment variable.
10. Verify that the *JAVA_HOME* variable is correct.
11. In the *Environment Variables* window, go to the *System variables* section and look for a variable called *PATH* and click *Edit...*.  This variable should already exist and have values in it.
12. **Do not delete this variable**. At the beginning of this variable, enter the code below. We are adding our *JAVA_HOME* variable to the *PATH* variable.
    ```shell
    %JAVA_HOME%\bin;
    ```
13. Open a new *Command Prompt*.
14. Enter the command below in the *Command Prompt* to make sure Java is installed correctly. A message regarding your Java version should be displayed. Make sure your version displayed matches the Java JDK version you downloaded.
    ```shell
    java -version
    ```
15. Enter the command below in the *Command Prompt* to check if your *PATH* variable is set correctly. It should list the directory of your JAVA JDK.
    ```shell
    path
    ```
