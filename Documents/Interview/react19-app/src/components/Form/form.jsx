
import { useMemo } from "react";
import { useEffect } from "react";
import { useActionState } from "react";
import {  useFormStatus } from "react-dom";

async function loginAction(prevState, formData) {
  console.log('prevState',prevState);
  
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";
  if (password && password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { success: "email", errors }
  }

  await new Promise((res) => setTimeout(res, 1500));

  return { success: true, errors: {} };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, {
    errors: null,
    success: null
  });

  console.log('state', state, isPending);
  
  const data = useMemo(()=> "dsd");
  console.log('data', data);
  
  useEffect(()=> console.log('efffect'))
  return (
    <form action={formAction}>
      <div>
        <input name="email" type="email" placeholder="Email" value={state?.success} />
        {state?.email && <p style={{ color: "red" }}>{state.email}</p>}
      </div>

      <div>
        <input name="password" type="password" placeholder="Password" />
        {state?.password && <p style={{ color: "red" }}>{state.password}</p>}
      </div>

      <SubmitButton />
    </form>
  );
}
