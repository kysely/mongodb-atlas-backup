import { spawn } from 'child_process'

export default class MongoBackup {
    constructor(config = {}) {
        this.user =         config.user       || ''
        this.pass =         config.password   || config.pass        || ''
        this.repl_set =     config.replicaSet || config.replica_set || ''
        this.nodes =        config.nodes      || []
        this.database =     config.database   || config.db          || null

        this.dump = () => this.execute(true)
        this.restore = () => this.execute(false)
    }

    cmdLineArguments() {
        return  [
                    '--ssl', '--host',
                    `${this.repl_set}/${this.nodes.join(',')}`,
                    '--authenticationDatabase', 'admin',
                    '-u', this.user, '-p', this.pass
                ]
    }

    execute(dump = true) {
        const backup = spawn(
            dump ? 'mongodump' : 'mongorestore',
            this.cmdLineArguments()
        )

        backup.stderr.on('data', (data) => {
            console.log(data.toString())
        })
    }
}
