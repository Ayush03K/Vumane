import { useState } from "react";
import bg_image from "../assets/images/kseniya-lapteva-lpo3y90Yuig-unsplash.jpg";
import Input from "../components/Input";
import ButtonB from "../components/ButtonB";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8787/api/v1/user/signin",
        {
          email,
          password,
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Sign in!");
      }
      const { token } = response.data;
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { state: { token } });
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
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
        <div className="relative w-full max-w-2xl p-12 rounded-2xl bg-[rgba(0,0,0,0.55)] backdrop-blur-sm overflow-hidden shadow-[0_0_30px_rgba(0,0,0)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(225,0,0,0.2)_0%,_transparent_100%)] z-0" />

          <div className="relative z-10 space-y-10 text-white ">
            <h1 className="text-4xl font-bold text-center text-[#FFCCCC]">
              Welcome to Vumane
            </h1>

            <div className="space-y-6">
              <label className="block text-lg font-semibold text-[#FFCCCC]/80">
                Email
              </label>
              <Input
                hw="h-14 w-full bg-[rgba(225,0,0,0.1)]"
                placehold="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="block text-lg font-semibold text-[#FFCCCC]/80">
                Password
              </label>
              <Input
                hw="h-14 w-full bg-[rgba(225,0,0,0.1)]"
                placehold="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <ButtonB
                title="Signin"
                hw="w-[80%] shadow"
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
