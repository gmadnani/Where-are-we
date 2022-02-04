# Simple Guide to Collaborating on GitHub!
## 01: Making your own branch
### 01A: Introduction
When we work on a group / collaborative project, we want to set up branches on the repository. This is so that we can work on the same project without overwriting each other's code. We will do this in the terminal.

### 01B: Tutorial
#### 01B1: Create the branch locally
First, make the branch on your machine and name your branch. You can do this with the simple command:
```
git checkout -b *YOUR BRANCH NAME HERE*
```

#### 01B2: Make changes and commits
Next, make some changes to the repository (if you want to). Use the usual commands to add these commits:
```
git add .
git commit -m "MESSAGE HERE"
```

You can skip this step if you like. Come back to editing the code and making commits once you've set up your branch.

#### 01B3: Push the branch to the repository
For your branch to be visible to other users, you need to push your branch. First, use the command:
```
git push
```

You may also need to use the following command. The terminal will tell you if its required:
```
git push --set-upstream origin *YOUR BRANCH NAME HERE*
```

#### 01B4: Done!
You've successfully created a new branch and pushed a commit to it. You can view your branch on GitHub: simply go to the index page and look for the 'branches' drop down menu. 


## 02: Submitting a pull request
### 02A: Introduction
When you have completed a section of work and want to add it to the main repository, so that the rest of your team can build on your code, you need to submit a pull request. This will ask someone on your team to look over your changes, and allow them to approve them and add them to the main branch.

We will do this on GitHub.

### 02B: Tutorial

## Approving a Pull Request
When someone else on your team has changes they want to make to the project, they will submit these for approval. This is how you can see those changes, modify them if they clash with other changes that have been made, and merge them with the main branch. 
## Updating Your Branch
If yo want to update your branch with somebody else's work that has been pulled into the main. 