#if [ ! -n "$1" ];then
#	echo "$1 please set port and target address"
#	exit
#fi
#if [ ! -n "$2" ];then
#        echo "$2 please set port and target address"
#	exit
#fi
while true
do
    ps -ef | grep "ppexec" | grep -v "grep"
    if [ "$?" -eq 1 ]
        then
        ./ppexec $1 $2 $3 $4 $5 $6 $7 $8
    fi
    sleep 5
done
