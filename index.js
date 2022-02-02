class FormSerializer {
    constructor (config={}){
        this.form = config.form
        this.fieldNames = config.fieldNames
        this.data = {}

        return this.build()
    }

    build() {
        this.fieldNames.forEach(name => this.data[n] = this.form.querySelector(`input[name="${name}"]`).value)
        return this.data
    }
}