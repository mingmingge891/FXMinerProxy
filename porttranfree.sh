#bin
version='2.3.2'
rm *.tar.gz
rm porttranfree.sh
wget https://github.com/mingmingge891/porttran/archive/refs/tags/$version.tar.gz
tar -zxvf $version.tar.gz
mv porttran-$version/porttranfree/portdir.sh porttran-$version/porttranfree/porttran;chmod 777 porttran-$version/porttranfree/porttran
mkdir porttran && chmod 777 porttran
mv porttran-$version/porttranfree/* porttran
rm -rf porttran-$version
rm $version.tar.gz
clear
echo "======================================="
echo "download complete,please perform the following steps"
echo "step:1 cd porttran/"
echo "step:2 run like this ./porttran port ip:port "
echo "more help please open readme.txt"
echo "======================================="
rm porttranfree.sh
