pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'git fetch --depth=500'
        sh 'latesttag=$(git describe --always)'
        sh 'echo "checking out ${latesttag}"'
        sh 'git checkout $latesttag'
      }
    }

  }
  environment {
    repoURL = 'https://github.com/v88NoahJerreel/helloworld.git'
  }
}