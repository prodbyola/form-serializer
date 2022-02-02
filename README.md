# Project Title

V-Form-Serializer.

## Description

Looking for a way to serialie your form data without jquery on any external plugin? V-Form-Serializer is simple and light-weight form serializer written in vanillaJS and you can use it in your project.

## Getting Started

### Dependencies

* This package has zero dependencies.

### Installing

* npm i v-form-erializer.

### Usage

If your your form is...
```html
<form id="my-form">
    <input type="text" name="name" />
    <input type="email" name="email" />
</form>
```

Then in JS...
```js
    import FormSerializer from "Serializer"

    const form = document.getElementById("my-form")
    const fields = ["name", "email"]

    const formData = new FormSerializer({
        form,
        fieldNames: fields
    })
```

## Help

If you need any help, please contact prodbyola@gmail.com or 35geniusofficial@gmail.com
