interface FormConfig {
    form: HTMLElement
    fieldNames: Array<string>
}

class FormSerializer implements FormConfig {
    form: HTMLElement;
    fieldNames: string[];
    data: any;

    constructor (config: FormConfig){
        this.form = config.form
        this.fieldNames = config.fieldNames
        this.data = {}

        return this.build()
    }

    build() {
        this.fieldNames.forEach((name: string) => {
            const el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement = this.form.querySelector(`input[name="${name}"]`)
            this.data[name] = el.value
        })
        return this.data
    }
}

export default FormSerializer