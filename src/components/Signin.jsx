import { logo, signin } from "../assets/images";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Modal2 from "./modal/ForgotPass";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Signin = ({ setIsSignUp }) => {
  const handleSignup = () => {
    setIsSignUp(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [openModal,setOpenModal] = useState(false)


  return (
    <div className="flex text-white px-6 md:px-0 bg-[#00906C]">
      <div className="w-[619px] hidden lg:block">
        <img src={signin} className="h-screen w-[619px] absolute" alt="" />
        <p className="relative text-white text-center px-20 top-72 text-[26.18px] ">
          Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae
          pellentesque.
        </p>
      </div>
      {/* Forms */}

      <div className="md:w-[916px]  w-full h-screen ">
        <div className="flex justify-center mt-10">
          <img src={logo} alt="logo" className="w-40" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center md:w-[514px] mx-auto"
        >
          <h1 className="font-bold md:text-6xl text-2xl my-6">Sign In</h1>
          <div className="flex gap-2 bg-[#F6F6F6] border-2 mb-6 py-2 border-[#079077] rounded-xl px-2 text-[#00906C]">
            <MdEmail size={30} />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-[#F6F6F6]"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 mb-10">{errors.email.message}</p>
          )}

          <div className="flex gap-2 bg-[#F6F6F6] border-2 py-2 border-[#079077] rounded-xl px-2 text-[#00906C]">
            <GiPadlock size={30} />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full outline-none bg-[#F6F6F6]"
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div>
            <button onClick={()=>setOpenModal(!openModal)} className="mt-2 hover:text-white/60">Forgot your password?</button>
            <br />
            <button
              className="px-12 text-white font-medium hover:bg-[#185248f4] mt-8 text-[20px] border-2 border-white rounded-full py-3"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-center  mt-8 ">or sign in with</p>
          </div>
          {/* Icons */}
          <div className="flex justify-center gap-5 my-5">
            <a href="#">
              <FaApple size={30} />
            </a>
            <a href="#">
              <FaGoogle size={30} />
            </a>
            <a href="#">
              <FaFacebook size={30} />
            </a>
          </div>
          <p className="text-center text-[12px] mt-8 ">
            Do not have an account ?{" "}
            <button
              className="text-black hover:text-slate-700"
              onClick={handleSignup}
            >
              SIGN UP
            </button>
          </p>
        </form>
      </div>
      {openModal &&  <Modal2 setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Signin;
