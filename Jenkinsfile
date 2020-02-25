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
}