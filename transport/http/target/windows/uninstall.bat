@ECHO OFF

@ECHO Stopping tb-http-transport ...
net stop tb-http-transport

@ECHO Uninstalling tb-http-transport ...
"%~dp0"tb-http-transport.exe uninstall

@ECHO DONE.