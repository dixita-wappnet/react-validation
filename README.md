# validation-Hooks

## What is React Hook Form?

- React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.
- The package size is tiny (just 8.6 kB minified and gzipped) and it has zero dependencies. The API is very intuitive, which provides a seamless experience to developers. React Hook Form follows HTML standards for validating the forms using a constraint-based validation API.
- Another great feature offered by React Hook Form is its painless integration with UI libraries because most libraries support the ref attribute.

### To install React Hook Form, run the following command:
```
npm install react-hook-form
```
## How to use React Hooks in a form 

- In this section, you will learn about the fundamentals of the useForm Hook by creating a very basic registration form.

- First, import the useForm Hook from the react-hook-form package:
```
import { useForm } from "react-hook-form";
```
- Then, inside your component, use the Hook as follows:
```
const { register, handleSubmit } = useForm();
```

Example :- 
```
import { useForm } from 'react-hook-form';

function HookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>

            First Name :-  <input {...register('firstName', { required: true, minLength: 5 })} placeholder="Enter Your First Name" /><br />
            {errors.firstName && <p>First name is required.</p>}<br />

            Last Name :-  <input {...register('lastName', { required: true, minLength:5 })} placeholder="Enter Your Last Name" /><br />
            {errors.lastName && <p>Last name is required.</p>}<br />

            Email :- <input {...register('email', { pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z0-9]+$/, minLength:15 })} placeholder="Enter Your email" /><br />
            {errors.email && <p>Please, Enter Validate Email Address.</p>}<br />

            Age :-  <input {...register('age', { pattern: /\d+/, min: 18, max: 40 })} placeholder="Enter Your Age" /><br />
            {errors.age && <p>Please enter Validate number for age.</p>}<br />

            <input type="submit" />
        </form>
    );
}

export default HookForm;
```

