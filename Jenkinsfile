pipeline {
    agent any    
    withCredentials([sshUserPrivateKey(credentialsId: 'DCJenkins', keyFileVariable: 'identity',  usernameVariable: 'userName')]) {
        def remote = [:] 
        remote.name = "DC Jenkins" 
        remote.host = "52.42.127.239"
        remote.allowAnyHosts = true 
        remote.user = userName 
        remote.identityFile = identity        
    }     
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
                 sshCommand remote: remote, command: 'cd /var/www/helloworld/helloworld_staging && git fetch --depth=500 && latesttag=$(git describe --tag --always) && git checkout ${latesttag}'
                 sshCommand remote: remote, command: 'uid=$(forever list | grep /var/www/hello_world/helloworld/index.js  | cut -c24-27) && forever stop $uid'
                 sshCommand remote: remote, command: 'NODE_ENV=production forever start /var/www/hello_world/helloworld/index.js'
            }
        }
    }
    environment {
        repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
    }
}