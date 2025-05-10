pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test || true'
      }
    }

    stage('Audit') {
      steps {
        sh 'npm audit || true'
      }
    }
  }

  post {
    always {
      emailext(
        subject: "Build Status: ${currentBuild.currentResult}",
        body: "Hi team,\n\nThe build has finished with status: ${currentBuild.currentResult}.\n\nThanks,\nJenkins",
        to: “s224714354@deakin.edu.au”,
        attachLog: true
      )
    }
  }
}
