pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'jyok1m/portfolio'
        DOCKER_TAG = "${env.BRANCH_NAME == 'main' ? 'latest' : env.BRANCH_NAME == 'stg' ? 'staging' : 'dev'}"
    }

    stages {
        stage('Build') {
            when {
                anyOf {
                    branch 'dev'
                    branch 'stg'
                    branch 'main'
                }
            }
            steps {
                withCredentials([string(credentialsId: 'fontawesome-token', variable: 'FONTAWESOME_TOKEN')]) {
                    sh '''
                        echo "$FONTAWESOME_TOKEN" > .fa-token
                        docker build --secret id=FONTAWESOME_TOKEN,src=.fa-token -t $DOCKER_IMAGE:$DOCKER_TAG .
                        rm -f .fa-token
                    '''
                }
            }
        }

        stage('Publish') {
            when {
                anyOf {
                    branch 'dev'
                    branch 'stg'
                    branch 'main'
                }
            }
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

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'host-ssh-key', keyFileVariable: 'SSH_KEY', usernameVariable: 'SSH_USER'),
                    string(credentialsId: 'host-gateway-ip', variable: 'HOST_IP'),
                    string(credentialsId: 'host-ssh-port', variable: 'HOST_PORT')
                ]) {
                    sh '''
                        ssh -i "$SSH_KEY" -p "$HOST_PORT" -o StrictHostKeyChecking=no "$SSH_USER@$HOST_IP" \
                            "docker compose -f /opt/portfolio/docker-compose.yml pull && \
                             docker compose -f /opt/portfolio/docker-compose.yml up -d"
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
