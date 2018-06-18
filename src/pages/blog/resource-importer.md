### Using the Resources Importer

The [Resources Importer](https://dev.liferay.com/en/develop/tutorials/-/knowledge_base/7-1/importing-resources-with-a-theme) "lets theme developers import files and web content with a theme".

As you are working on your Liferay Portal theme you will eventually need to use the Resources Importer to grab the beautiful content created on your local instance of Liferay. The end goal is to showcase your new theme, content and all, to anybody who decides to install your theme without needing any configuration.

This blog post will help clarify some of the confusing parts taken from the official Liferay docs.

### The Easy Way

I wouldn't be writing this if the "easy way" could sufficiently get the job done, but I'll give it an honorable mention.

You can completely export a copy of your website as <code>archive.lar</code> stick it in <code>[theme-name]/src/WEB-INF/src/resources-importer</code> folder, and your content would be immediately viewable to anybody who installs your theme.

__However,__ a LAR file is version-specific. Meaning it won't work on any version of Liferay Portal other than the one from which it was exported.

To create the <code>archive.lar</code> file, from your site's sidebar navigation click [your site name] > publishing > export. Follow the instructions and be sure to check off all of the pages / assets you want exported into the LAR file. After the file is ready for download, click the download icon. You'll need rename the file to archive.lar and place it in the proper directory for everything to be included in your theme.

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