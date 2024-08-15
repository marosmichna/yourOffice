import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/Form";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/Button";
import { useDispatch } from "react-redux";
import { setEmail, setFirstName, setLastName, setIsRegister } from "@/store/userName/userNameSlice";
import { AppDispatch } from "@/store/store";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must have at least two characters")
    .regex(/^[A-Za-z]+$/, "First name can only contain letters"),
  lastName: z
    .string()
    .min(2, "Last name must have at least two characters")
    .regex(/^[A-Za-z]+$/, "Last name can only contain letters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
});

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const capitalize = (firstLetter: string) => {
    return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1).toLowerCase();
  }

  const onSubmit = (data: FieldValues) => {

    const formattedFirstName = capitalize(data.firstName);
    const formattedLastName = capitalize(data.lastName);

    dispatch(setFirstName(formattedFirstName));
    dispatch(setLastName(formattedLastName));
    dispatch(setEmail(data.email));

    if (data.firstName !== "" && data.lastName !== "" && data.email !== "") {
       dispatch(setIsRegister(true));
    }
    
    navigate("/communities");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <FormControl 
          type="text" 
          id="firstName" 
          placeholder="Enter your First name" 
          {...register("firstName")}
        />
        {errors.firstName && <span className="text-red-500">{String(errors.firstName.message)}</span>}
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <FormControl 
          type="text" 
          id="lastName" 
          placeholder="Enter your Last Name" 
          {...register("lastName")}
        />
        {errors.lastName && <span className="text-red-500">{String(errors.lastName.message)}</span>}
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormControl 
          type="email" 
          id="email" 
          placeholder="Enter your Email" 
          {...register("email")}
        />
        {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}
      </FormItem>
      <Button variant="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default SignInForm ;
