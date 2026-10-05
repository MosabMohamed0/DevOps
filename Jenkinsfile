pipeline {
    agent {
        label 'docker'
    }

    stages {
        stage('Test') {
            steps {
                script {
                    sh 'docker run --rm -v "$PWD:/app" -w /app node:18-alpine npm install'
                    sh 'docker run --rm -v "$PWD:/app" -w /app node:18-alpine npm run test -- --watchAll=false'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker build -t mosab/docker-react .'
                }
            }
        }
    }
}