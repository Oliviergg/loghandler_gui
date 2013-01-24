#encoding: UTF-8
namespace :server  do
  desc "Manage server"
  task :start  => :environment do
  end
  task :add ,[:name,:url,:port,:desc] => :environment do |t,args|
    Rails.application.eager_load!
    raise "Usage: rake server:add[name,url,port,desc]" if args[:name].nil? || args[:url].nil? || args[:port].nil?
    Server.create!(name:args[:name],url:args[:url],port:args[:port],desc:args[:desc])   
  end
end
