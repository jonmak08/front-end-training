---
title: "Step 10: Reading the console"
description: "Learn how to read and understand the console output."
buttonTitle: "Step 10 Complete"
parentId: "setup"
layout: "tutorial"
weight: 10
---

## {$page.title}

Now that we have Liferay running, we have to understand how to read the messages output by the console.

* Make sure Liferay is loading your ```portal-ext.properties``` file correctly by looking for a line in your console similar to the output below.
    ```shell
    Loading file:/liferay-portal/portal-ext.properties
    ```
* Make sure Liferay is loading the correct database as defined in your ```portal-ext.properties``` file by looking for a line in your console similar to the output below.
    ```shell
    INFO  [localhost-startStop-1][DialectDetector:77] Determine dialect for HSQL Database Engine 2.3
    [localhost-startStop-1][DialectDetector:97] Liferay is configured to use Hypersonic as its database. Do NOT use Hypersonic in production. Hypersonic is an embedded database useful for development and demonstration purposes. The database settings can be changed in portal-ext.properties.
    ```
* Make sure the version of Liferay that you are using is correct by looking for a line in your console similar to the output below.
    ```shell
    Starting Liferay Community Edition Portal 7.0.4 GA5 (Wilberforce / Build 7004 / October 23, 2017)
    ```
* Upon startup, Liferay will automatically create a *deploy* folder in your bundle.  When there are files placed in this folder, Liferay will automatically scan and consume any deployable packages. The location of this folder can be found by looking for a line in your console similar to the output below.
    ```shell
    [localhost-startStop-1][AutoDeployDir:194] Auto deploy scanner started for /liferay-portal/deploy
    ```
* Make sure Liferay has finished loading and is ready for use by looking for a line in your console similar to the output below.
    ```shell
    INFO [main] org.apache.catalina.startup.Catalina.start Server startup in NNN ms
    ```
* Errors in Liferay are usually prefixed with an **ERROR** warning message.  They can be found by looking for a line in your console similar to the output below.
    ```shell
    ERROR [Framework Event Dispatcher: Equinox Container: a029ce5e-e1fc-0017-1e71-df5549d2deba][com_liferay_util_taglib:97] FrameworkEvent ERROR
        org.osgi.framework.BundleException: Could not resolve module: com.liferay.util.taglib [9]_  Unresolved requirement: Import-Package: javax.el_ [Sanitized]
        at org.eclipse.osgi.container.Module.start(Module.java:429)
        at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.incStartLevel(ModuleContainer.java:1582)
        at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.incStartLevel(ModuleContainer.java:1562)
        at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.doContainerStartLevel(ModuleContainer.java:1533)
        at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.dispatchEvent(ModuleContainer.java:1476)
        at org.eclipse.osgi.container.ModuleContainer$ContainerStartLevel.dispatchEvent(ModuleContainer.java:1)
        at org.eclipse.osgi.framework.eventmgr.EventManager.dispatchEvent(EventManager.java:230)
        at org.eclipse.osgi.framework.eventmgr.EventManager$EventThread.run(EventManager.java:340)
    ```