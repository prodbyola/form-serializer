# Project Title

V-Form-Serializer

## Description

Looking for a way to serialize your form data without jquery on any external plugin? V-Form-Serializer is a simple and light-weight form serializer written in simple pure Vanilla and you can use it in your project.

## Getting Started

### Dependencies

* This package has zero dependencies.

### Installing

```
npm i v-form-serializer
```

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
    import FormSerializer from "v-form-serializer"

    const form = document.getElementById("my-form")
    const fields = ["name", "email"]

    const formData = new FormSerializer({
        form,
        fieldNames: fields
    })
```

## Help

If you need any help, please contact prodbyola@gmail.com or 35geniusofficial@gmail.com
