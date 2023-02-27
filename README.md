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

