# Project Title

<<<<<<< HEAD
V-Form-Serializer.

## Description

Looking for a way to serialie your form data without jquery on any external plugin? V-Form-Serializer is simple and light-weight form serializer written in vanillaJS and you can use it in your project.
=======
V-Form-Serializer

## Description

Looking for a way to serialize your form data without jquery on any external plugin? V-Form-Serializer is a simple and light-weight form serializer written in simple pure Vanilla and you can use it in your project.
>>>>>>> 3e5deddc77ded7534219bb19cdd9f42242964941

## Getting Started

### Dependencies

* This package has zero dependencies.

### Installing

<<<<<<< HEAD
* npm i v-form-erializer.
=======
```
npm i v-form-serializer
```
>>>>>>> 3e5deddc77ded7534219bb19cdd9f42242964941

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
<<<<<<< HEAD
    import FormSerializer from "Serializer"
=======
    import FormSerializer from "v-form-serializer"
>>>>>>> 3e5deddc77ded7534219bb19cdd9f42242964941

    const form = document.getElementById("my-form")
    const fields = ["name", "email"]

    const formData = new FormSerializer({
        form,
        fieldNames: fields
    })
```

## Help

If you need any help, please contact prodbyola@gmail.com or 35geniusofficial@gmail.com
