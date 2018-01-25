---
title: "Step 3: What is Liferay?"
description: "Explaining what Liferay is."
buttonTitle: "Step 3 Complete"
parentId: "machine"
layout: "tutorial"
weight: 3
---

## {$page.title}

It is hard to describe, because it does so much, but what we say is that it is a totally awesome content and document managing, user collaborating, socially enabling, application developing, corporate integrating, completely customizable platform for building the Internet. You are probably doubting us right now, but hopefully once you start using it, you see that it is true.

Liferay provides a robust *platform* to build your site quickly and serve it to all clients, be they desktop, mobile, or anything in between; it provides all the standard *applications* you need to run on your site; and it provides an easy to use development *framework* for new applications or customization. In addition to this, Liferay Portal is developed using an open source methodology, by people from around the world. The code base is solid and has been proved to be reliable and stable in mission critical deployments in diverse industries.

[Read more about what Liferay is.](https://dev.liferay.com/discover/portal).

## Liferay versions

There are two versions of Liferay - The Community Edition (CE) and Digital Experience Platform (DXP).


* **Liferay Digital Experience Platform**, DXP, is our enterprise product and requires a subscription. It is a suite of products that work together to allow companies to digitize business operations, deliver connect customer experiences, and gather actionable customer insight. The suite includes such products as Liferay Digital Enterprise, Mobile Experience, Liferay Connected Services, Developer Tools, Liferay Sync and much more.
* **Liferay Digital Enterprise**, DE is the primary component of Liferay DXP and the enterprise equivalent of Liferay Portal CE. Enterprise subscribers are often large enterprise companies who are looking for the stability, reliability, security, and performance. Purchasing a subscription gives customers access to enterprise features/products, as well as our Subscription Services team, which provides full support, regular fixpacks/updates, emergency fixes, and security alerts/patches.
* **Liferay Portal Community Edition**, CE, is the free, open source version that is free to anyone to download and use.  Updates to CE are released approximately every quarter and include fixes that had already been released to our enterprise subscribers. CE users also have access to the community versions of many of our other products, but do not have access to the subscription services. Forums and JIRA tickets are the primary ways that the community escalates and discusses issues.

[Read more about Liferay's DXP platform.](https://www.liferay.com/resources/l?title=digital-experience-platform).

## What is needed for Liferay?

Liferay needs Java, an application server, and a database to run. Our baseline setup is to use **Apache Tomcat** as the application server and **HSQLDB** in a non-production environment, and **MySQL** in a production environment for the database.

### What is an application server?

An application server is a component-based software framework that resides in the middle-tier of a server centric architecture and provides the business logic for an application program. At the core, an application server handles communications to the database on one hand and connections to the web application (Liferay) on the other.

Liferay supports many of today's most popular application servers. Even better, there are already prepared and pre-configured distribution packages bundled with an application server.

**Application servers supported by Liferay:**

* [Apache Geronimo](http://geronimo.apache.org)
* **[Apache Tomcat](http://tomcat.apache.org)**
* [Caucho Resin](http://caucho.com)
* [Eclipse Jetty](https://www.eclipse.org/jetty)
* [IBM Websphere](https://www.ibm.com/cloud/websphere-application-platform)
* [JOnAS](https://jonas.ow2.org/bin/view/Main)
* [Oracle Glassfish](http://www.oracle.com/technetwork/middleware/glassfish/overview/index.html)
* [Oracle Weblogic](https://www.oracle.com/middleware/weblogic/index.html)
* [Red Hat JBoss](https://www.redhat.com/en/technologies/jboss-middleware)

### What is a database?

A database is a collection of information that is organized so that it can be easily accessed, managed and updated.

Data is organized into rows, columns and tables, and it is indexed to make it easier to find relevant information. Data gets updated, expanded and deleted as new information is added. Databases process workloads to create and update themselves, querying the data they contain and running applications against it.

**Databases supported by Liferay:**

* **[HSQLDB](http://hsqldb.org)**
* [IBM Db2](https://www.ibm.com/analytics/us/en/db2)
* [Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2017)
* **[MySQL](https://www.mysql.com)**
* [Oracle Database](https://www.oracle.com/database/index.html)
* [PostgreSQL](https://www.postgresql.org)
* [SAP Sybase](https://www.sap.com/products/sybase-ase.html)

## Liferay's quick start guide

If you wanted to get Liferay up and running quickly, you can follow the following steps. This is not necessary for the tutorial, but in case you wanted to see Liferay up and running quickly, you can use the bundle to get started.

This **does not** use Liferay's *source* code.

1. Install Java. We should have completed this step previous.
2. Download a Liferay Portal CE bundle at [https://www.liferay.com/downloads](https://www.liferay.com/downloads). Select *Bundled with Tomcat* and click the *Download* button.
3. Extract the downloaded bundle into a folder. (e.g. ```liferay-portal```).
4. Open a *Terminal/Git Bash* window.
5. Navigate to the ```bin``` folder within the location of the extracted bundle.
    ```shell
    cd /liferay-portal/liferay-ce-portal-7.0-ga1/tomcat-8.0.32/bin
    ```
6. Start tomcat.
    On windows run the command below.

    ```shell
    startup.bat
    ```

    On OS X/Linux, run the command below.

    ```shell
    ./startup.sh
    ```

On windows, the server console window will open.

On OS X/Linux systems, there is no output in the console window since all logs are stored in ```tomcat-8.0.32/logs/catalina.out``` file.

7. Keep watching the console until you see the following.
    ```shell
    INFO [main] org.apache.catalina.startup.Catalina.start Server startup in NNN ms
    ```

    Liferay Portal is now running and ready to be used.
8. Upon startup, Liferay will automatically open your default browser to *http://localhost:8080*. You can sign in using username: **test@liferay.com** and password: **test**.
