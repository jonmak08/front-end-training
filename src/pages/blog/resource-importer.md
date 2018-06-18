### Using the Resources Importer

The [Resources Importer](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/importing-resources-with-a-theme) "lets theme developers import files and web content with a theme".

As you are working on your Liferay Portal theme you will eventually need to use the Resources Importer to grab the beautiful content created on your local instance of Liferay. The end goal is to showcase your new theme, content and all, to anybody who decides to install your theme without needing any configuration.

This blog post will help clarify some of the confusing parts taken from the official Liferay docs.

### The Easy Way

I wouldn't be writing this if the "easy way" could sufficiently get the job done, but I'll give it an honorable mention.

You can completely export a copy of your website as <code>archive.lar</code> stick it in <code>[theme-name]/src/WEB-INF/src/resources-importer</code> folder, and your content would be immediately viewable to anybody who installs your theme.

__However,__ a LAR file is version-specific. Meaning it won't work on any version of Liferay Portal other than the one from which it was exported.

To create the <code>archive.lar</code> file, from your site's sidebar navigation click [your site name] > publishing > export. Follow the instructions and be sure to check off all of the pages / assets you want exported into the LAR file. After the file is ready for download, click the download icon. You'll need rename the file to archive.lar and place it in the proper directory for everything to be included in your theme.

### The Not So Easy (but Necessary) Way

Just like when you installed Liferay on your machine for the first time, there's the easy way (using the bundled installer) and there's the Liferay way, which is compiling and building your Liferay instance from the source code. Creating a <code>sitemap.json</code> file is one of those things you need to do by hand, and frankly also one of the majorly confusing parts the Liferay docs assumes you can easily comprehend.

__For those people who like to skip ahead and don't really follow directions, this is for you!__

You are free to read through the Liferay docs and complete the steps in your own order, but if you follow the steps outlined here, you can avoid __HOURS__ of headache and debugging.

I'll go through creating the files in your resources-importer and  <code>sitemap.json</code> in a multi-step process that starts off easy and incrementally adds more content with each pass through.

#### Step 0: Creating the files

Before we move on, let's make sure we have created all of the proper folders needed in our resources-importer directory.

Checkout the file tree as outlined from the [Liferay Docs](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/preparing-and-organizing-web-content-for-the-resources-importer#organizing-your-resources) for all of the necessary folders and a brief description of what it should contain.

#### Step 1: Copying the Structures from your Theme

Just as a heads up, after completing this step, you will only be able to see that a structure has been added to your theme's content area, but your theme will still look naked.

_If possible_ it is tremendously helpful to use RESTful naming conventions. For example, the way Liferay's resources-importer works is based off of the names of your structures, templates and web content. A good example of this would be to have a structure named <code>Welcome.json</code>, a template named <code>Welcome.ftl</code> and a web content article named <code>Welcome.xml</code>.

You will be copying the structure(s) you made in your Liferay theme as new JSON file into the <code>resources-importer/journal/structure/</code> folder. Each strcuture is going to need its own JSON file.

1. Navigate to your structures from the leftside nav [your site] > content > web content. Click on actions icon in the upper right hand (three vertical dots), and select __Structures__. Choose the structure you want to copy over. Scroll halfway down the page and click __Source__ (to the left of __View__). Copy all of the JSON in the code editor.

2. Paste its contents into a new JSON file in the <code>resources-importer/journal/structures/</code> folder.

3. Repeat steps 1-2 for all of the structures used throughout your theme until they are all copied over into the structures directory.

When done your file path should look like:

<code>resources-importer/journal/structures/Welcome.json</code>

### Step 2: Copying the Templates from your Theme

This step is going to be very similar to the previous step, but with one caveat. While we'll be copy + pasting the themes as new FTL files into <code>resources-importer/journal/templates</code>, we are going to create an additional folder whose name is dependent on the structure this template is connected to.

1. Navigate to your templates from the leftside nav [your site] > content > web content. Click on the actions icon in the upper right hand and select __Templates__. Choose the template you want to copy over. Copy all of the FTL code in code editor.

2. Paste its contents into a new FTL file in <code>resources-importer/journal/structures/[name of connected structure]</code>. Using <code>Welcome.json</code> as an example structure, and <code>Welcome.ftl</code> as an example template, you will paste the code into a new FTL file under <code>importer/journal/structures/Welcome</code>.

3. Repeat steps 1-2 for all of the templates used throughout your theme until they are all copied over into the templates directory.

When done your file path should look like:

<code>resources-importer/journal/templates/Welcome/Welcome.ftl</code>

### Step: 3 Copying the Web Content Articles from your Theme

Again, this will be more of the same. However, the catch this time is that your articles are going to be nested inside a folder __named after the template that it uses__.

__All web content articles require a structure and template.__

It's okay to share the same structure or same template as other articles (such as Basic Web Content).

1. Navigate to your web content article from the leftside nav [your site] > content > web content. Choose the web content you want to copy over. In the upper righthand side, click the actions icon and choose __View Source__. Copy all of the XML code in the window.

2. Paste its contents into a new XML file in <code>resources-importer/journal/articles/[name of template used]</code>. Going with the previous example of your files named <code>Welcome.json</code> and <code>Welcome.ftl</code> for your structures and templates, you will paste your XML code into <code>resources-importer/journal/articles/Welcome</code>.

3. Repeat steps 1-2 for all of the web content articles used throughout your theme until they are all copied over into the articles directory.

When done your file path should look like:

<code>resources-importer/journal/articles/Welcome/Welcome.xml</code>

Congratulations! You have now configured your resources importer to now contain the structures, templates, and web content articles whenever your theme is deployed and installed. However, without your <code>sitemap.json</code> file configured, your theme is still going to look naked without any pages or contents :(.

### Step 4: Copying the Documents and Media from your Theme

This step is pretty simple, you'll be copying over all of the documents and media (photos, videos, icons, etc) into the <code>resources-importer/document_library/documents</code> folder.

To navigate to Documents and Media, from your site click the leftside nar > [your site] > content > Documents and Media. Click the actions icon, download, and place them inside <code>resources-importer/document_library/documents</code>.


### Step 5: Configuring the sitemap.json File

In case you somehow missed out on this step, created a new file named <code>sitemap.json</code> inside <code>[your theme]/WEB-INF/resources-importer/</code>

**Disclaimer:** This was the most difficult part of the entire process. Prepare for spending most of your time fiddling here.



### Checking if your Theme and Resources Deployed Correctly

You can deliver the flavor of your theme two ways, either as a site template or as a site.

This is set by the configuration in your <code>liferay-plugin-package.properties</code> file located in <code>[theme-name]/src/WEB-INF</code>.

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

Now it's time to finally see if your theme and its resources deployed correctly. After deploying your theme with all of the latest changes to files under the resources-importer folder, navigate to the Control Panel in the leftside nav of your site.
- If you imported into a site template, click site templates, then on the name of your theme to see your theme and resources in action.
- If you imported directly into a site, click the actions menu (three vertical dots) and select _Go to Public Pages_ to see it.

__HELP!__ I don't see any of my content showing up on my page. Don't worry, I got you.

### Troubleshooting Tips