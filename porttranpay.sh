#bin
version='3.5'
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'
myFile=$version.tar.gz
installfolder='/etc/porttran'

if [ ! -f "$myFile" ]; then
echo "\n"
else
rm $version.tar.gz
fi

kill(){
   pidarr=$(ps x | grep "porttran" | awk '{print porttran}')
   arr=($pidarr)
   len=${#arr[*]}
   if [ $len -ge 4 ]
   then
   # 循环kill所有名为$1的进程
      indx=0
      indmax=$[$len-3]
      while [ $indx -lt $indmax ]; do
      kill -9 ${arr[$idx]}
      echo "kill -9 "${arr[$idx]}
      indx=$[$idx + 1]
      done
   else
      echo "该进程不存在"
   fi
}

install() {
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
   cp -r porttran /etc/
   rm -rf porttran/
   clear
}

check_install() {
if [ ! -d "$installfolder" ]; then
   install
fi
}

before_show_menu() {
    echo && echo -n -e "${yellow}操作完成按回车返回主菜单: ${plain}" && read temp
    show_menu
}

update() {
  install
  #wget https://raw.githubusercontent.com/mingmingge891/porttran/main/porttranfree.sh -O -> /usr/bin/porttran-ui && chmod +x /usr/bin/porttran-ui && porttran-ui
  echo -n -e "${yellow}更新完成请手动输入porttran-ui 启动面板\n"${plain}
  echo 
  exit 0
}
uninstall() {
   rm /usr/bin/porttran-ui
   rm -rf /etc/porttran
   before_show_menu
}
start() {
    cd /etc/porttran
   ./porttran -c &
   #setsid /etc/porttran/porttran &
}
stop() {
   systemctl stop /etc/porttran/porttran
}

show_menu() {
   clear
   echo -e "
  ${green}安装完成 ${red}版本${version} ${green}安装目录/etc/porttran
  ${green}任意目录下输入 porttran-ui 启动面板
  ${red}默认web端口62000 浏览器输入ip:62000进入监控面板${plain}
————————————————
  ${green}0.${plain} 退出
————————————————
  ${green}1.${plain} 更新
  ${green}2.${plain} 卸载
————————————————
  ${green}3.${plain} 启动
  ${green}4.${plain} 停止
————————————————
 "
    echo && read -p "请输入选择 [0-5]: " num

    case "${num}" in
        0) exit 0
        ;;
        1) update
        ;;
        2) uninstall
        ;;
        3) start
        ;;
        4) stop
        ;;
        *) echo -e "${red}请输入正确的数字 [0-4]${plain}"
        ;;
    esac
}

check_install
show_menu
