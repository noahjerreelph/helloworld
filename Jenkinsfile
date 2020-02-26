pipeline {
    agent any
    stages {
        stage('Test') {
            when { branch "master" }
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'DCJenkins', keyFileVariable: 'identity',  usernameVariable: 'userName')]) {
                    sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'cd /var/www/hello_world/helloworld_staging && sudo git checkout . && sudo git pull origin master && sudo npm install'
                    sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'uid=$(forever list | grep /var/www/hello_world/helloworld_staging/index.js  | cut -c24-27) && forever stop $uid'
                    sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'NODE_ENV=staging forever start /var/www/hello_world/helloworld_staging/index.js'
                }                 
            }
        }
        stage('Release') {
            when { tag "*" }
            steps {
                 sh 'printenv'
                 sh 'echo Pulling... ' + env.GIT_BRANCH
                 
                 withCredentials([sshUserPrivateKey(credentialsId: 'DCJenkins', keyFileVariable: 'identity',  usernameVariable: 'userName')]) {
                     sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'cd /var/www/hello_world/helloworld && sudo git checkout . && sudo git fetch && sudo git checkout '+ env.GIT_BRANCH +'  && sudo npm install'
                     sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'uid=$(forever list | grep /var/www/hello_world/helloworld/index.js  | cut -c24-27) && forever stop $uid'
                     sshCommand remote: [ name: 'DCJenkins', host: "52.42.127.239", allowAnyHosts: true, user: userName, identityFile: identity ], command: 'NODE_ENV=production forever start /var/www/hello_world/helloworld/index.js'
                }
            }
        }
    }
    environment {
        repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
    }
}