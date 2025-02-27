import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface IForm {
  email: string,
  message: string,
}

function App() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: 'onChange',
  });

  const onSubmit:SubmitHandler<IForm> = data => {
    console.log(data)
  }

  const emailError = formState.errors.email?.message

  return (
    <>
      <h1>Feedback form</h1>
      <form className="form" action="submit" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Email..."
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })
        }
        />
        {emailError && <p>{emailError}</p>}

        <textarea placeholder="Some text..." />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
