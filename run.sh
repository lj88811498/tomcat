#!/bin/sh
source /etc/profile
/usr/local/tomcat-8.5.4/bin/startup.sh
tail -f /usr/local/tomcat-8.5.4/logs/catalina.out