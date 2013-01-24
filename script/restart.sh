echo "LogHandler - Do you really want to restart all ? - $RAILS_ENV"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) eval './script/restart_$RAILS_ENV.sh';break;;
  No ) exit;
    esac
done
