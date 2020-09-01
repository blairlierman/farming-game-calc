### Setting up testing in WSL (Ubuntu)
Add the path to Chrome to the CHROME_BIN environment
In WSL, edit the ~/.profile file

#### Editing your Bash Profile
1. Edit the file: `nano ~/.profile`
2. Scroll to the bottom and add the following statement
   1. `export CHROME_BIN="/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"`
   2. Substitute your own path to Chrome in Windows
3. Ctrl+O to Save (Write) the changes
4. Ctrl+X to Exit
5. Restart WSL
6. Type `printenv` to verify that there is now a CHROME_BIN variable

