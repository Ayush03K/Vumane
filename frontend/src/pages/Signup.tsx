import bg_image from "../assets/images/kseniya-lapteva-A4rqd2g-eLo-unsplash.jpg";
import Input from "../components/Input";
import ButtonR from "../components/ButtonR";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";

export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,
        {
          name,
          email,
          password,
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Signup successful!");
      }
      localStorage.setItem("token", response.data.token);
      const { token } = response.data;
      navigate("/dashboard", { state: { token } });
      console.log("Signup successful");
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={bg_image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 h-full w-full flex justify-center items-center px-6 lg:px-60">
        <div className="relative w-full max-w-2xl p-12 rounded-2xl bg-[rgba(0,0,0,0.50)] backdrop-blur-sm    overflow-hidden shadow-[0_0_30px_rgba(0,0,0)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,40,80,0.3)_0%,_transparent_100%)] z-0" />

          <div className="relative z-10 space-y-10 text-white ">
            <h1 className="text-4xl font-bold text-center text-white">
              Welcome to Vumane
            </h1>

            <div className="py-4 space-y-4">
              <label className="block text-lg font-semibold text-[#fff]/80">
                Name
              </label>
              <Input
                hw="h-14 w-full  bg-[rgba(0,40,80,0.1)] placeholder-[#fff] text-white focus:ring-[#fff]/50"
                placehold="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="block text-lg font-semibold text-[#fff]/80">
                Email
              </label>
              <Input
                hw="h-14 w-full  bg-[rgba(0,40,80,0.1)] placeholder-[#fff] text-white focus:ring-[#fff]/50"
                placehold="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="block text-lg font-semibold text-[#fff]/80">
                Password
              </label>
              <Input
                hw="h-14 w-full bg-[rgba(0,40,80,0.1)] placeholder-[#fff] text-white focus:ring-[#fff]/50"
                placehold="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <ButtonR title="Signup" hw="w-[80%]" onClick={handleSignup} />
              <div className="flex gap-2 text-onwghite">
                Already have an account ?
                <Link to={"/signup"}>
                  <div className="underline text-onwghite">Login</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
