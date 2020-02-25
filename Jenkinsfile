pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'latesttag=$(git describe --tags)'
        sh 'echo checking out ${latesttag}'
        sh 'git checkout ${latesttag}'
      }
    }

  }
  environment {
    repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
  }
}