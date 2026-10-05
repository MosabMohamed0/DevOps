pipeline {
    agent {
        label 'docker'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t my-image .'
                }
            }
        }

        stage('Run Test') {
            steps {
                script {
                    env.DOCKER_BUILDKIT = 1
                    sh 'docker run -e CI=true mosab/docker-react npm run test'
                }
            }
        }
    }
}