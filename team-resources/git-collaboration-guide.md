# Simple Guide to Collaborating on GitHub!
## How to make a new branch in the terminal

First, create the branch on your computer using the command: 
>> git checkout -b "YOUR BRANCH NAME HERE"

Next, make some changes (if you want to), then add them to this new branch with the usual command:
>> git add .
>> git commit -m "MESSAGE HERE"

Next we need to push the branch to the repository stored on GitHub. To do this, use the following command.
>> git push

You might also need to use the following command, to create the branch on GitHub. The terminal will tell you if you need to use this line, and you can change your settings so its automatic (but don't worry if its not):
>> git push --set-upstream origin *YOUR BRANCH NAME HERE*

Check GitHub. You should now be able to view your new branch on the main page of the repository, under the 'branches' drop down box! 