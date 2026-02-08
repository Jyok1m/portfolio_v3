pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jyok1m/portfolio'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build') {
            steps {
                withVaultSecret(path: 'fontawesome-token', key: 'FONTAWESOME_TOKEN') {
                    sh '''
                        echo "$FONTAWESOME_TOKEN" > .fa-token
                        docker build --secret id=FONTAWESOME_TOKEN,src=.fa-token -t $DOCKER_IMAGE:$DOCKER_TAG .
                        rm -f .fa-token
                    '''
                }
            }
        }

        stage('Publish') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $DOCKER_IMAGE:$DOCKER_TAG
                        docker logout
                    '''
                }
            }
        }
    }

    post {
        always {
            sh "docker rmi $DOCKER_IMAGE:$DOCKER_TAG || true"
        }
    }
}
