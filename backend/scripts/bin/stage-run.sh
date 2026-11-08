#!/bin/bash
# 0、readme
# a拷贝文件到服务器上；b设置文件可执行；c运行sh文件
# chmod +x *.sh

# 1、stop backend进程
pidList=$(ps aux | grep 8310 | grep -v grep | awk '{print $2}')
for pid in $pidList
do
kill -9 $pid
echo 'kill pid '$pid
done

rm -rf eframe-web-log*.txt
rm -rf logs



#启动jar包
nohup java -Djava.awt.headless=true -jar -Xms128m -Xmx256m -XX:MetaspaceSize=128M -XX:MaxMetaspaceSize=256M eframe-web.jar
--server.port=8310 --spring.profiles.active=prod >eframe-web-log"$(date +%Y-%m-%d)".8310.txt 2>&1 &
