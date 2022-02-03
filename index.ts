interface FormConfig {
    form: HTMLFormElement
    fieldNames: Array<string>
}

class FormSerializer implements FormConfig {
    form: HTMLFormElement;
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
            console.log(this.form)
            const el = this.form.getElementsByName(name)[0] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
            this.data[name] = el.value
        })
        return this.data
    }
}

export default FormSerializer