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

install() {
   wget https://github.com/mingmingge891/porttran/archive/refs/tags/$version.tar.gz
   tar -zxvf $version.tar.gz
   cd porttran-$version/porttranpay
   tar -zxvf porttranlatest.tar.gz
   cd ../..
   mv porttran-$version/porttranpay/porttran/portdir.sh porttran-$version/porttranpay/porttran/porttran
   mkdir porttran && chmod 777 porttran
   mv porttran-$version/porttranpay/porttran/* porttran
   cd porttran/ && chmod +x porttran && chmod +x ppexec
   cd ../
   rm -rf porttran-$version
   rm $version.tar.gz
   rm porttranfree.sh
   cp -r porttran /etc/
   rm -rf porttran/
   clear
   echo && echo -n -e "${yellow}安装完成按回车返回主菜单: ${plain}" && read temp
   show_menu
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
   #./porttran -c &
   setsid ./porttran &
}
stop() {
   echo && echo -n -e "${yellow}停止将会重启服务器回车继续,CTRL+C退出: ${plain}" && read temp
   reboot
}

show_menu() {
   clear
     echo -e "
     ${green}面板安装完成${red}版本${version}
     ${green}任意目录下输入 porttran-ui 启动面板
     ${red}浏览器默认端口62438,默认用户名密码admin,admin${plain}
   ————————————————
     ${green}0.${plain} 退出
   ————————————————
     ${green}1.${plain} 安装
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
        1) install
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
show_menu
