FROM monkey123/centos-tomcat:latest
MAINTAINER <450416064@qq.com>
ADD run.sh /usr/local/sh/run.sh
RUN chmod a+x /usr/local/sh/run.sh