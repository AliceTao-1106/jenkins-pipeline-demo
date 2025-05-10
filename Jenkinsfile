pipeline {
    agent any

    stages {
        stage('Stage Summary') {
            steps {
                echo 'Stage 1: Build'
                echo 'Task: Compile and package the application source code.'
                echo 'Tool: Maven'

                echo 'Stage 2: Unit and Integration Tests'
                echo 'Task: Execute unit tests to validate individual components and integration tests to verify that modules work together correctly.'
                echo 'Tool: Jest'

                echo 'Stage 3: Code Analysis'
                echo 'Task: Analyze source code for maintainability, code smells, and potential bugs.'
                echo 'Tool: SonarQube'

                echo 'Stage 4: Security Scan'
                echo 'Task: Scan the project dependencies and codebase for known vulnerabilities.'
                echo 'Tool: Snyk'

                echo 'Stage 5: Deploy to Staging'
                echo 'Task: Deploy the built application to a staging environment to simulate production deployment.'
                echo 'Tool: SCP (Secure Copy Protocol)'

                echo 'Stage 6: Integration Tests on Staging'
                echo 'Task: Run automated tests on the staging environment to verify real-world functionality.'
                echo 'Tool: Postman (via Newman CLI)'

                echo 'Stage 7: Deploy to Production'
                echo 'Task: Deploy the verified build from staging to the production server.'
                echo 'Tool: AWS CLI'
            }
        }
    }
}


