#
wget http://47.105.86.47/porttran/porttranlatest.tar.gz
tar -zxvf porttranlatest.tar.gz
mv porttran/portdir.sh porttran/porttran;chmod 777 porttran/porttran
#cp porttran/porttran /usr/bin
#echo export PATH=$(cd "$(dirname "$0")"; pwd):'$'PATH > temp.txt
#tail temp.txt >> /etc/profile
#rm temp.txt
#source /etc/profiles
rm porttranlatest.tar.gz
clear
echo "======================================="
echo "download complete,please perform the following steps"
echo "step:1 cd porttran/"
echo "step:2 run like this ./porttran port ip:port "
echo "more help please open readme.txt"
echo "======================================="
rm porttran.sh