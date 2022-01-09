#bin
version='2.4'
rm *.tar.gz
wget https://github.com/mingmingge891/porttran/archive/refs/tags/$version.tar.gz
tar -zxvf $version.tar.gz
mv porttran-$version/porttranfree/portdir.sh porttran-$version/porttranfree/porttran
mkdir porttran && chmod 777 porttran
mv porttran-$version/porttranfree/* porttran
cd porttran/ && chmod +x porttran && chmod +x ppexec
cd ../
rm -rf porttran-$version
rm $version.tar.gz
rm porttranfree.sh
clear
echo "======================================="
echo -e "\033[42;37m download complete,please perform the following steps \033[0m"
echo "SSH remote login:"
echo "step:1 cd porttran/"
echo "step:2 run like this: ./porttran port ip:port "
echo "VNC remote login:"
echo "step:1 cd porttran/"
echo "step:2 run like this: nohup ./porttran port ip:port &"
echo "step:3 exit"
echo "more help please open readme.txt"
echo -e "\033[42;37m 下载完成,请根据下面步骤执行 \033[0m"
echo "如果通过SSH远程登陆: "
echo "第一步: cd porttran/"
echo "第二步: nohup ./porttran 端口 目标ip或者域名:端口 &"
echo "第三步: exit (一定要通过exit退出不然下次登陆时程序会停止)"
echo "如果通过VNC远程登陆: "
echo "第一步: cd porttran/"
echo "第二步: ./porttran 端口 目标ip或者域名:端口 -s"
echo "查看更多帮助打开 readme.txt"
echo "======================================="

