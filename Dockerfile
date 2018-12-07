FROM monkey123/centos-tomcat:latest
MAINTAINER <450416064@qq.com>
ADD public/ /usr/local/tomcat-8.5.4/webapps/ 
ADD run.sh /usr/local/sh/run.sh
RUN chmod a+x /usr/local/sh/run.sh
CMD ["/usr/local/sh/run.sh"]
