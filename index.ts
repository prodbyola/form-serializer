interface FormConfig {
    form: HTMLFormElement
    fieldNames: Array<string>
}

class FormSerializer implements FormConfig {
    form: HTMLFormElement;
    fieldNames: string[];
    data: any;

    constructor(config: FormConfig) {
        this.form = config.form
        this.fieldNames = config.fieldNames
        this.data = {}

        return this.build()
    }

    build () {
        this.fieldNames.forEach((name: string) => {
            const query: string = `input[name=${name}], select[name=${name}], textarea[name=${name}]`
            const el = document.querySelectorAll(query)[0] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            this.data[name] = el.value
        })
        return this.data
    }
}

export default FormSerializer