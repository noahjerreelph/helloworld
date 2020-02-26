def remote = [:]
remote.name = "dc"
remote.host = "52.42.127.239"
remote.allowAnyHosts = true

pipeline {
  agent any
  stages {
    stage('Test') {
        when { branch "master" }
        steps {
           sshCommand remote: remote, command: 'cd /var/www/helloworld/helloworld_staging && sudo git pull origin master'
           sshCommand remote: remote, command: 'uid=$(forever list | grep /var/www/hello_world/helloworld_staging/index.js  | cut -c24-27) && forever stop $uid'
           sshCommand remote: remote, command: 'NODE_ENV=staging forever start /var/www/hello_world/helloworld_staging/index.js'
        }
    }
    stage('Release') {
        when { tag "*" }
        steps {
        }
    }
  }
  environment {
    repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
  }
}