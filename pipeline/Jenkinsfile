pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        sh '''
          if [ -f package.json ]; then
            (npm ci || npm install)
          else
            echo "No package.json, skip install"
          fi
        '''
      }
    }

    stage('Lint & Test') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }
}
