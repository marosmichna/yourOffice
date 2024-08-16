import Button from "@/components/ui/Button";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/Form";
import { ProfileUser } from "@/models/User/profileUser";
import { AppDispatch, RootState } from "@/store/store";
import { setEmail, setFirstName, setLastName } from "@/store/userName/userNameSlice";
import { capitalize } from "@/utils/formatedName";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";

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

const EditProfileForm = () => {

  const dispatch = useDispatch<AppDispatch>();

  const firstName = useSelector((state: RootState) => state.userName.firstName);
  const lastName = useSelector((state: RootState) => state.userName.lastName);
  const email = useSelector((state: RootState) => state.userName.email);

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileUser>({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
    },
    resolver: zodResolver(FormSchema)
  });

  const onSubmit = (data: FieldValues) => {
    
    const formattedFirstName = capitalize(data.firstName);
    const formattedLastName = capitalize(data.lastName);

    dispatch(setFirstName(formattedFirstName));
    dispatch(setLastName(formattedLastName));
    dispatch(setEmail(data.email));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
        <FormLabel htmlFor="firsName">First name</FormLabel>
        <FormControl 
            type="text"
            id="firstName"
            {...register("firstName")}
        />
        {errors.firstName && <span className="text-red-500">{String(errors.firstName.message)}</span>}
        </FormItem>
        <FormItem>
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <FormControl 
            type="text"
            id="lasttName"
            {...register("lastName")}
        />
        {errors.lastName && <span className="text-red-500">{String(errors.lastName.message)}</span>}
        </FormItem>
        <FormItem>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormControl 
            type="text"
            id="email"
            {...register("email")}
        />
        {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}
        </FormItem>
        <Button variant="submit">
        Edit Profile
        </Button>
    </Form>
  )
}

export default EditProfileForm;