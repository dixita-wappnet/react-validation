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