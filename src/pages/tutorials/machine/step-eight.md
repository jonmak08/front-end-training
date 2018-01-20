---
title: "Step 8: Configuring Liferay's properties and settings"
description: "Configuring Liferay's properties and settings."
buttonTitle: "Step 8 Complete"
parentId: "machine"
layout: "tutorial"
weight: 8
---

## {$page.title}

We need to configure settings in Liferay to get it to build and run from the *source* code.

### What is a \*.properties file?

The *\*.properties* files are used to define paths for compiling and running Liferay; paths such as the location of the bundle, what application server to use, the version of the application server that will be used, etc are all customizable from within a custom *\*.properties* file.

Because we are going to be overriding default properties, the easiest way to accomplish this is through a *\*.USER_NAME.properties*. (e.g. *app.server.brianchan.properties* or *build.brianchan.properties*).

Liferay reads the *\*.properties* files in this order of precedence.
1. *.USER_NAME.properties
2. *.ENV_COMPUTERNAME.properties
3. *.ENV_HOST.properties
4. *.ENV_HOSTNAME.properties
5. *.properties

Therefore, whatever custom *\*.properties* file you set will supersede what is defined in the default file.

To find out what the default property values are and what you can override, open the default.properties file (e.g. *app.server.properties* or *build.properties*) and search for the line(s) that set the property you want to override. Then, define the property you want to override in your *\*.USER_NAME.properties* file, changing its value.

#### Creating a custom build.\*.properties and app.server.\*.properties files

1. Create a file called **build._USER\_NAME_.properties** and **app.server._USER\_NAME_.properties** inside the folder you cloned your Liferay *source code*.
    The *USER_NAME* is the user you login with, not your machine name. On Windows machines the default is, *liferay*.
2. Edit your **build._USER\_NAME_.properties** file with the following lines in a text editor:

    ```shell
    javac.memoryMaximumSize=1024m
    ```
3. Edit your **app.server._USER\_NAME_.properties** file with the path to your desired location of where you want your bundle, where your application server is located, and what type of application server you are using.

    The *path* of your bundle should be outside of your cloned Liferay *source code* folder.

    Your **app.server._USER\_NAME_.properties** file might look something like below when it is complete, if we are using apache tomcat as our application server.

    ```shell
    app.server.type=tomcat
    app.server.parent.dir=${project.dir}/../my-custom-folder/bundles
    app.server.tomcat.dir=${app.server.parent.dir}/tomcat-8.0.32
    ```

#### Creating a portal-ext.properties file

Values defined in the *portal.properties* file are configurations used within Liferay. To override these settings, you will need to create a *portal-ext.properties* file.

*You will make changes within this file quite often to customize your Liferay instance.*

1. Duplicate the *portal-developer.properties* file, found within your cloned Liferay *source code*.  (e.g. *PATH/liferay-portal/portal-impl/src*).
2. Rename this copied file to *portal-ext.properties*.
3. Open the *portal-ext.properties* file in a text editor. It should look something like the code below.

    ```shell
    theme.css.fast.load=false
    theme.css.fast.load.check.request.parameter=true
    theme.images.fast.load=false
    theme.images.fast.load.check.request.parameter=true

    javascript.fast.load=true
    javascript.log.enabled=false

    layout.template.cache.enabled=false

    combo.check.timestamp=true

    minifier.enabled=false

    openoffice.cache.enabled=false

    velocity.engine.resource.modification.check.interval=0
    ```
4. Set the *javascript.fast.load* propety to **false**. *Set this value to **true**, if we are trying to replicate a production environment with minified JavaScript files.
5. When all custom configurations are complete, move the *portlet-ext.properties* file to one folder level above the application server directory defined in the **app.server._USER\_NAME_.properties** file. (i.e. *PATH/bundles*).