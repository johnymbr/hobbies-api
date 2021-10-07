enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment === Environments.qa_environment) {
            return 8083;
        } else {
            return 3000;
        }
    }

    getDBName(): String {
        if (this.environment === Environments.prod_environment) {
            return 'db_hobbies';
        } else if (this.environment === Environments.dev_environment) {
            return 'db_hobbies';
        } else if (this.environment === Environments.qa_environment) {
            return 'db_hobbies';
        } else {
            return 'db_hobbies';
        }
    }
}

export default new Environment(Environments.local_environment);