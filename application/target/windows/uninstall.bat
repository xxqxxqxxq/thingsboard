@ECHO OFF

@ECHO Stopping thingsboard ...
net stop thingsboard

@ECHO Uninstalling thingsboard ...
"%~dp0"thingsboard.exe uninstall

@ECHO DONE.