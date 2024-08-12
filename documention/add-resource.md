# Instructions for Adding Resources to a JSON File via GitHub

Follow these steps to add new entries to a JSON file stored in a GitHub repository. This guide assumes you are familiar with basic GitHub operations and JSON file structure.

## Step 1: Navigate to the Content Folder
Begin by navigating to the `content` folder in your GitHub repository.

<img width="400" alt="image" src="https://github.com/specollective/RMC-Resources/assets/92892101/1522bc0d-2358-412d-bec8-bab682fdd27d)">


## Step 2: Open the Resources Folder
Inside the `content` folder, locate and open the `resources` folder.

<img width="400" alt="image" src="https://github.com/specollective/RMC-Resources/assets/92892101/395e982f-9428-438a-ba87-9fbf716f6ca5">


## Step 3: Access the Categories Folder
Within the `resources` folder, you'll find several categories. Navigate to the `categories` folder.

## Step 4: Select Your Category File
Choose the specific category file you wish to edit. Remember, the file name must be hyphenated (like `example-category.json`) and it should be a `.json` file.

## Step 5: Edit the JSON File
After opening the category file, you will see a list enclosed in square brackets (`[]`), which is known as an array in JSON terminology. 
You can add a new resource by pasting the template provided below after the last object in this array. 
Remember to separate the entries with a comma if it's not the last item in the list.

### JSON Template to Add:
```json
{
    "title": "<Title of the document>",
    "button": {
      "text": "<Button text>",
      "link": "<URL to the document>"
    },
    "description": "<Description of the content>",
    "location": "<Physical address>",
    "phone": "<Contact phone number>"
}
```

Replace the placeholders (the text within < >) with actual information relevant to the new resource.

## Step 6: Ensure Correct JSON Format
Make sure that:
- Each key and its corresponding value are enclosed in double quotes (`"`).
- The entire new entry is enclosed in curly braces (`{}`).
- You've included a comma after the last curly brace of the previous object (if not adding to the end of the list).

## Step 7: Commit Your Changes
After you have added the new JSON object:
- Scroll to the top of the page.
- Enter a commit message in the "Commit changes" box to describe what you have added or changed.
- Choose whether to commit directly to the current branch or to create a new branch and start a pull request. **Never** commit to the 'main' branch.
- Click on **Propose changes** to save the updates.
<img width="400" alt="image" src="https://github.com/specollective/RMC-Resources/assets/92892101/4ed9cf3d-2414-4584-ab71-a962a97751be">

## Step 8: Open up a Pull Request (PR)
You will then be prompted to open a pull request. This will help show the reviewer the change you made, and allow any further edits. 

<img width="400" alt="image" src="https://github.com/specollective/RMC-Resources/assets/92892101/6bb3333a-71ba-4e80-b403-2a1b9dd64470">

## Step 9: Make sure all checks pass
An automatic check will happen once you open your pull request. We want to make sure all checks pass. If it does not, please reach out for help. 

<img width="400" alt="image" src="https://github.com/specollective/RMC-Resources/assets/92892101/15204078-99cf-4895-a7bd-ef229920a2a4">


This guide should help you successfully add new resources to your JSON file on GitHub. Ensure that your file syntax is correct to prevent any issues with your application or website that utilizes this JSON file.
