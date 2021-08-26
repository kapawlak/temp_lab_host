# ILG.physics.ucsb.edu

## Directory Structure

The directory structure must look as follows for the index.html linking to work:


---
-ILG.physics.ucsb.edu folder
  |-static
  |-people
  |-Courses
        |-Course_group_folder
                |-Specific_Lab_folder
                        |-index.html
                        |-config.json             
                        |-home.md
                        |-FAQ.md
                        |-lab0.md
                        .
                        .
                        .
                        |-lab#.md
                        |-imgs
                          |-LabName
                          |-imagename.ext
                     
                        
## Rules for editing

This is a professionally-maintained folder intended to serve lab manuals to UCSB students. This is not a miscellaneous storage folder to put random lab-related files on.
Rules are strictly enforced on this respository to prevent rat-nesting of files. As this folder will be directly uploaded on the physics servers, any files not following these rules will be deleted without warning.

1. All course .md files must go into the appropriate course folder. 
  - Only **one** version of each lab is permitted. You must store alternate/historical versions of labs elsewhere.
2. Images must go into the respective /img/LabName folder of that course. 
  - Only one version of each image is permitted. Delete all other versions and sizes of the image.
  - Unused images (not linked in a lab file) are to be deleted.
  - Images must have a human-readable name.
3. Appending a file name with "old" "previous" "kelly" (e.g. "lab1-old.md" "kelly-lab5.md") is not permitted. These files will be removed. 
4. Additional proliferation of folders that are not for the explicit purpose of storing a course manual in the prescribed format is strictly prohibited
  - This includes "Misc" folders, or top-level folders that hold any files.
5. Any orphaned files will be deleted at the will of the maintainer without notice.
