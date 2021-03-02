


### Beginners Guide to Using the Resources Importer

The [Resources Importer](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/importing-resources-with-a-theme) "lets theme developers import files and web content with a theme".

As you are working on your Liferay Portal theme you will eventually need to use the Resources Importer to grab the beautiful content created on your local instance of Liferay. The end goal is to showcase your new theme, content and all, to anybody who decides to install your theme without needing any configuration.

This blog post will help clarify some of the confusing parts taken from the official Liferay docs.

### The Easy Way

I wouldn't be writing this if the "easy way" was good enough get the job done, but I'll give it an honorable mention.

You can completely export a copy of your website as an <code>archive.lar</code> and copy it inside the <code>[theme-name]/src/WEB-INF/src/resources-importer</code> folder, and your content would be immediately viewable to anybody who installs your theme.

__However,__ a LAR file is version-specific. Meaning it won't work on any version of Liferay Portal other than the one from which it was exported.

To create the <code>archive.lar</code> file, from your site's leftside navigation menu click [your site name] > publishing > export. Follow the instructions and be sure to check off all of the pages / assets you want exported into the LAR file. After the file is ready for download, click the __download icon__. You'll need rename the file to archive.lar and place it in the proper directory for everything to be included in your theme.

### The Not So Easy (but Necessary) Way

Just like when you installed Liferay on your machine for the first time, there's the easy way (using the bundled installer) and there's the Liferay way (compiling and building Liferay from source). Creating a <code>sitemap.json</code> file is one of those things you need to do by hand, and frankly also one of the majorly confusing parts the Liferay docs assumes you can easily comprehend.

__For those people who like to skip ahead and don't really follow directions, this is for you!__

You are free to read through the Liferay docs and complete the steps in your own order, but if you follow the steps outlined here, you can avoid __HOURS__ of headache and debugging.

I'll go through creating the files in your Resources Importer and  <code>sitemap.json</code> in a multi-step process that starts off easy and incrementally adds more content with each pass through.

#### Step 0: Creating the files

Before we move on, let's make sure we have created all of the proper folders needed in our resources-importer directory.

Checkout the file tree as outlined from the [Liferay Docs](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/preparing-and-organizing-web-content-for-the-resources-importer#organizing-your-resources) for a more detailed explanation and description of what each folder contains.

If they don't already exist, create these folders inside the <code>[theme-name]/src/WEB-INF/src/resources-importer</code> folder and its subfolders.

+ <code>[theme-name]/src/WEB-INF/src/resources-importer/</code>
	+ <code>sitemap.json</code> 	
    + <code>assets.json</code>
    + <code>document_library/</code>
    	+ <code>documents/</code>
     + <code>journal/</code>
     	+ <code>articles/</code>
        + <code>structures/</code>
        + <code>templates/</code>

#### Step 1: Copying the Structures from your Theme

Just as a heads up, after completing this step, you will only be able to see that a structure has been added to your theme's content area, but your theme will still look naked.

_If possible_ it is tremendously helpful to use RESTful naming conventions. For example, the way Liferay's Resources Importer works is based off of the names of your structures, templates and web content. A good example of this would be to have a structure named <code>Welcome.json</code>, a template named <code>Welcome.ftl</code> and a web content article named <code>Welcome.xml</code>.

You will be copying the structure(s) made from your Liferay theme as new JSON files into the <code>resources-importer/journal/structure/</code> folder. Each strcuture needs its own JSON file.

1. Navigate to your structures from the leftside nav and click [your site] > content > web content. Click on the actions icon in the upper right hand (three vertical dots), and select __Structures__. Choose the structure you want to copy over. Scroll halfway down the page and click __Source__ (to the left of __View__). Copy all of the JSON inside the code editor.

2. Paste its contents into a new JSON file in the <code>resources-importer/journal/structures/</code> folder.

3. Repeat steps 1-2 for all of the structures used throughout your theme until they are all copied over into the <code>resources-importer/journal/structures/</code> folder.

When done your file path should look something like:

<code>resources-importer/journal/structures/Welcome.json</code>

### Step 2: Copying the Templates from your Theme

This step is going to be very similar to the previous step, but with one caveat. While we'll be copy + pasting the themes as new FTL files into <code>resources-importer/journal/templates</code>, we are going to create an additional folder whose name is dependent on the structure this template is connected to.

1. Navigate to your templates from the leftside nav [your site] > content > web content. Click on the actions icon in the upper right hand and select __Templates__. Choose the template you want to copy over. Copy all of the FTL code inside the code editor.

2. Paste its contents into a new FTL file in <code>resources-importer/journal/structures/[name of connected structure]</code>. Using the previous example of <code>Welcome.json</code> as a structure, and <code>Welcome.ftl</code> as a template, the new FTL file will be pasted under <code>importer/journal/structures/Welcome</code>.

3. Repeat steps 1-2 for all of the templates used throughout your theme until they are all copied over into the templates directory.

When done your file path should look like:

<code>resources-importer/journal/templates/Welcome/Welcome.ftl</code>

### Step: 3 Copying Web Content Articles from your Theme

Again, this will be more of the same. However, the catch this time is that your articles are going to be nested inside a folder __named after the template that it uses__.

__All web content articles require a structure and template.__

It's okay to share the same structure or same template as other articles (such as Basic Web Content).

1. Navigate to your web content article from the leftside nav [your site] > content > web content. Choose the web content you want to copy over. In the upper righthand side, click the actions icon and choose __View Source__. Copy all of the XML code inside the window.

2. Paste its contents into a new XML file under <code>resources-importer/journal/articles/[name of template used]</code>. Going with the previous example of your files named <code>Welcome.json</code> and <code>Welcome.ftl</code> for your structures and templates, you will paste your XML code into <code>resources-importer/journal/articles/Welcome</code>.

3. Repeat steps 1-2 for all of the web content articles used throughout your theme until they are all copied over into the articles directory.

When done your file path should look like:

<code>resources-importer/journal/articles/Welcome/Welcome.xml</code>

Congratulations! You have now configured your resources importer to include the structures, templates, and web content articles whenever your theme is deployed and installed. However, without your <code>sitemap.json</code> file configured, your theme is still going to look naked without any pages or contents :(.

### Step 4: Copying the Documents and Media from your Theme

This step is pretty simple, you'll be copying over all of the documents and media (photos, videos, gifs, etc) into the <code>resources-importer/document_library/documents</code> folder.

Navigate to Documents and Media from your site by clicking the leftside nav > [your site] > content > Documents and Media. Click the actions icon, __download__, and place them inside <code>resources-importer/document_library/documents</code>.


### Step 5: Configuring the sitemap.json File

In case you skipped this step, create a new file named <code>sitemap.json</code> inside <code>[your theme]/WEB-INF/resources-importer/</code>

**Disclaimer:** The following steps proved to be the most difficult part of the entire process. Prepare for spending most of your time fiddling inside <code>sitemap.json</code>.

According to [Liferay's Docs](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/creating-a-sitemap-for-the-resources-importer)

>The <code>sitemap.json</code> specifies the site pages, layout templates, web content, assets, and portlet configurations provided with the theme. This file describes the contents and hierarchy of the site to import as a site or site template. If you’re developing themes for Liferay Marketplace, you must use the sitemap.json to specify resources to be imported with your theme.

Now that you know what it does, take a look at the example JSON, pattern match and you're all done!

Just kidding. Even though that's basically all we're going to do from here on out, let me extend my helping hand, from one UI intern to another.

Let's breakdown this code snippet from [here](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/defining-layout-templates-in-a-sitemap)

```javascript
{
  "layoutTemplateId":"2_columns_ii",
  "publicPages": [
      {
        "friendlyURL": "/welcome-page",
        "name": "Welcome",
        "title": "Welcome"
      },
      {
        "friendlyURL": "/custom-layout-page",
        "name": "Custom Layout Page",
        "title": "Custom Layout Page",
        "layoutTemplateId": "2_columns_i"
      },
      {
        "friendlyURL": "/hidden-page",
        "name": "Hidden Page",
        "title": "Hidden Page",
        "hidden": "true"
      }
  ]
}
```
To paraphrase the docs, the <code>layoutTemplateId</code> defined at the top sets the default layout template for all of your pages. If you define <code>layoutTemplateId</code> within a page like "Custom Layout Page", you will override the default layout template and use your newly defined value.

__PRO TIP__ Use this [link](https://github.com/liferay/liferay-portal/blob/master/portal-web/docroot/WEB-INF/liferay-layout-templates.xml) I found so you don't have to incorrectly guess the layout template IDs values used in <code>sitemap.json</code>. The layout names aren't the same as they're described from your theme. For example "2 Columns (50/50)" is called <code>2_columns_i</code> and "2 Columns (30/70)" is called <code>2_columns_ii</code>.

Now that you have a more detailed understanding of the first pattern of the <code>sitemap.json</code>, you can perform the first step and define the <code>layoutTemplateId</code> for all of the pages.

__1. Let's kill two birds with one stone actually and define all of the <code>publicPages</code> and <code>layoutTemplateId</code>.__

Copy + paste the code snippet to use as starter code into your <code>sitemap.json</code> and modify the values of the <code>friendlyUrl</code>, <code>name</code>, <code>title</code>, and if necessary <code>layoutTemplateId</code> to accurately represent all of the public pages inside your site's theme. If you have child or *gasp* grandchild pages nested throughout your site, no problem! Just define all of the parent pages first and we'll get around to the kiddos next.
#

__2. Using <code>layouts</code> to create and configure child pages__

```javascript
{      
    "friendlyURL": "/parent-page",
    "layouts": [
        {
            "friendlyURL": "/child-page-1",
            "name": "Child Page 1",
            "title": "Child Page 1"
        },
        {
            "friendlyURL": "/child-page-2",
            "name": "Child Page 2",
            "title": "Child Page 2"
        }
    ],
    "name": "Parent Page",
    "title": "Parent Page"
}
```

Take a few seconds to glance at this code snippet and answer these questions. What page is going to be defined? What will the layout template be? How many child pages does it have?

Child pages get nested into a parent page under <code>layouts</code> as an array of objects. Using the same pattern, you can nest a grandchild page under <code>layouts</code> in a child page. You can also define individual <code>layoutTemplateId</code>  for child and grandchild pages here.
#

__3. Using <code>columns</code> to configure a page's columns__

```javascript
{
    "columns": [
        [
            {
            	"portletId": "com_liferay_login_web_portlet_LoginPortlet"
            }
        ],
        [
            {
            	"portletId": "com_liferay_hello_world_web_portlet_HelloWorldPortlet"
            }
        ]
    ],
    "friendlyURL": "/parent-page",
    "name": "Parent Page",
    "title": "Parent Page"
},
```

I modified a [code snippet](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/creating-a-sitemap-for-the-resources-importer) to make it easier to follow along. Let me help break down what you're looking at. This is a two column page, with the first column having a login portlet (more on portlet configs later), and the second column having a hello world portlet.

So <code>columns</code> is an array, with each entry being an array of objects. If your layout is 2-1-2 columns, then your code will have three entries, and each column gets its own object that holds all of the portlet configs.
#

__4. Using <code>portletId</code> and <code>portletPrefernces</code> to configure your theme's portlets__

```javascript
{
    "portletId": "com_liferay_journal_content_web_portlet_JournalContentPortlet",
    "portletPreferences": {
        "articleId": "Custom Title.xml",
        "groupId": "${groupId}",
        "portletSetupPortletDecoratorId": "decorate",
        "portletSetupTitle_en_US": "Web Content Display with Custom Title",
        "portletSetupUseCustomTitle": "true"
    }
}
```
__PRO TIP__ Use this [cheatsheet](https://dev.liferay.com/en/participate/liferaypedia/-/wiki/Main/Portlet+ID+Quick+Reference+Guide) to help you find the <code>portletId</code> for the portlets you've added inside of your theme.

Now that we've familiarized ourselves with the patterns of <code>sitemap.json</code>, there's something I wanted to revisit. There is a particular way Liferay sites have been structured. A site has many pages, and each page has <code>layouts</code> to define the look. Each layout defines how many <code>columns</code> will exist. So following this pattern, the last step would be defining in each column what portlets it contains.

Nested inside of your <code>columns</code>, you'll have objects that will define the <code>portletId</code> and <code>portletPreferences</code>.

Using the Portlet ID quick reference guide, we can lookup the <code>portletId</code> of <code>com_liferay_journal_content_web_portlet_JournalContentPortlet</code> and see that we are defining a single Web Content Display with customized preferences. The <code>articleId</code> refers to the web content article you want displayed. Using our long running example, <code>Welcome.xml</code> would be the web content article you would display inside of the Web Content Display Portlet. If you're like me, you'll probably be setting many of your <code>portletSetupPortletDecoratorId</code> to <code>barebone</code>.

#

### Checking if your Theme and Resources Deployed Correctly

You can deliver the flavor of your theme two ways, either as a site template or as a site.

This is configured in your <code>liferay-plugin-package.properties</code> file located in <code>[theme-name]/src/WEB-INF</code>.

By default, resources are imported into a new site template named after the theme and should look like this: 
```javascript
name=[your theme name]
module-group-id=liferay
module-incremental-version=1
tags=
short-description=
long-description=
change-log=
page-url=http://www.liferay.com
author=Liferay, Inc.
licenses=LGPL
liferay-versions=7.0.0+

resources-importer-developer-mode-enabled=true
```

If you want to learn how to import your resources into a new site, you can set additional settings as explained in [Liferay's docs](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/specifying-where-to-import-your-themes-resources).

Now it's time to finally see if your theme and its resources deployed correctly. After deploying your theme, it should contain all that we've added to the resources-importer folder. Navigate to the Control Panel in the leftside nav of your site.
* If you imported into a site template, click __Site Templates__, then on the name of your theme to see your theme and resources in action.
* If you imported directly into a site, click the actions menu (three vertical dots) and select __Go to Public Pages__ to see it.

__HELP!__ I don't see any of my content showing up on my page / I can't preview my site template.

* Try troubleshooting by checking your server console for any clues if something _may_ not be properly defined in <code>sitemap.json</code>
* Double check that all of your folder directories are spelled correctly and that your templates use the name of the used structures, and the articles use the names of the used templates.
* In the <code>sitemap.json</code> check the scoping to see if all of the braces are closed properly, there are no trailing commas, everything is in string object notation ("quotes")
* <code>layoutTemplateId</code> is defined correctly. Some tricky examples are <code>1_column</code>, <code>1-2-1_columns_i</code>, or <code>2_columns_iii</code>.
* After deploying, work your way backwards with what works and then trying to add additional code. Can I view the site template? Do my theme styles come through? Does it display only pages but no content? Do the modules appear but aren't configured?

### TL:DR

Resources Importer Module is a helpful tool that allows for theme developers to show off their themes with some preinstalled content, but can be a bit of a pain if you're not using the <code>archive.lar</code> method. Using Liferay's documentation will eventually get you to a working <code>sitemap.json</code> so that when you deploy your theme, it will have content included, but can be confusing to follow along when starting from scratch.