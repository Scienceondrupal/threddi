### README ###

---------------------
This module was developed with initial funding from National Oceanic and Atmospheric Administration (NOAA).  Currently, the module is being maintained with funding from the NASA ACCESS Grant.
Copyright (c) 2013, Information Technology & Systems Center.  University of Alabama in Huntsville
All rights reserved.
Redistribution and use of the module, with or without modification, are permitted with proper credit to Information Technology & Systems Center,  University of Alabama in Huntsville.
---------------------

INTRODUCTION
---------------------
This module helps us browse through the RAMADDA, a freely available, open-source content and data repository.


REQUIREMENTS
---------------------
Drupal 6.x 
This module has no other dependency.

INSTALLATION
---------------------
Firstly we need to make sure that the settings in PHP is configured properly by allocating more time (generally it is 30 seconds, we may change it to 400 seconds) and memory (it is 128 Mb, we may want change it to 1024Mb).

i. Install the module "threddi" by copying an unzipped folder to [drupal]\sites\all\modules\
ii. Enable "threddi"

TESTING
---------------------
To test this module, once you install it, you will find a section called "THREDDS module settings" under Administer/[Site configuration]
Make sure you have provided proper values for "Root xml document" and "RAMADDA URL", which are the mandatory fields. You can also set the Request timeout as per your requirement.
Once you successfully provided the required fields, you can go to [drupal]/threddi to view the tree structure generated from a THREDDS data server.
You may click the titles preceded by '>' to expand them.

