# V-Form-Serializer

Looking for a way to serialize your form data without jquery on any external plugin? V-Form-Serializer is a simple and light-weight form serializer written in simple pure Vanilla and you can use it in your project.

## Installation

Use the node package manager [npm](https://www.npmjs.com/package/v-form-serializer) to install.

```bash
npm i v-form-serializer
```

## Usage

If your your form is...
```html
<form id="my-form">
    <input type="text" name="name" />
    <input type="email" name="email" />
</form>
```

Then in JS...
```js
    import FormSerializer from "v-form-serializer"

    const form = document.getElementById("my-form")
    const fields = ["name", "email"]

    const formData = new FormSerializer({
        form,
        fieldNames: fields
    })

    console.log(formData) // {fieldname: fieldvalue}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)