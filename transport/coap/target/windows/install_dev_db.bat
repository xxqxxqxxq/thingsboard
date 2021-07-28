@ECHO OFF

setlocal ENABLEEXTENSIONS

SET BASE=D:\\tb\\thingsboard\\transport\\coap\target
SET LOADER_PATH=%BASE%\conf,%BASE%\extensions

SET jarfile=%BASE%\thingsboard-3.2.2-boot.jar
SET installDir=%BASE%\data
SET loadDemo=true

IF "%SQL_DATA_FOLDER%" == "" (	
	SET SQL_DATA_FOLDER=/tmp
)

java -cp %jarfile% -Dloader.main=org.thingsboard.server.ThingsboardInstallApplication^
                    -Dinstall.data_dir=%installDir%^
                    -Dinstall.load_demo=%loadDemo%^
                    -Dspring.jpa.hibernate.ddl-auto=none^
                    -Dinstall.upgrade=false^
                    -Dlogging.config=%BASE%\windows\install\logback.xml^
                    org.springframework.boot.loader.PropertiesLauncher

if errorlevel 1 (
   @echo ThingsBoard DB installation failed!
   POPD
   exit /b %errorlevel%
   )
@echo ThingsBoard DB installed successfully!
