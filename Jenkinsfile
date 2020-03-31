pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/bcgov/design-system-web-components.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Reporting Outdated and Vulnerable Dependencies...'
                sh 'npm audit || true'
                sh 'npm outdated || true'
                sh 'npm test'
            }
        }   
        stage('Build') {
            steps {
                sh 'npm run build.sjs'
            }
        }
    }
}