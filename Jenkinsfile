pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Step 1: Build - Install dependencies'
                // Tool: npm (Node.js package manager)
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Step 2: Test - Run unit and integration tests'
                // Tool: Jest 
                sh 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Step 3: Code Analysis - Run code quality checks'
                // Tool: SonarQube 
                sh 'echo Running sonar-scanner...'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Step 4: Security Scan - Scan for vulnerabilities'
                // Tool: Snyk
                sh 'npm install -g snyk'
                sh 'snyk auth $SNYK_TOKEN'
                sh 'snyk test'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Step 5: Deploy - Upload app to staging server'
                // Tool: AWS CLI
                sh 'echo Deploying to staging...'
            }
        }

        stage('Test on Staging') {
            steps {
                echo 'Step 6: Integration Tests on Staging'
                // Tool: Jest + Supertest 
                sh 'npm run test:staging'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Step 7: Deploy - Upload app to production server'
                // Tool: Docker
                sh 'echo Deploying to production...'
            }
        }
    }
}

