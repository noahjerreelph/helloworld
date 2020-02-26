pipeline {
  agent any
  stages {
    stage('Build') {
        when { 
          environment name: 'NAME', value: 'this' 
        }
        steps {
            sh 'git fetch --depth=500'
            sh 'latesttag=$(git describe --tag --always)'
            sh 'git checkout ${latesttag}'
        }      
    }
  }
  environment {
    repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
  }
}