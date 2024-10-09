// Hooks
import { useState } from "react";

// Email js com
import emailjs from "emailjs-com";

// Howler
import { Howl } from "howler";

import suc_sound from "../../assets/sound/relaxe.mp3";

import load from "../../assets/icons/loading-svgrepo-com.svg";
import success from "../../assets/icons/success-2.svg";

// Email data object
let data = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(data);
  const [emailState, setEmailsState] = useState("writting"); // Writting, sending, sent

  const isSending = emailState === "sending";
  const isSent = emailState === "sent";

  const soundPlay = () => {
    // Howler object
    const ring = new Howl({
      src: [suc_sound],
      html5: true,
    });

    ring.play(); // Start play de sound
  };

  // Email send event henddler
  const emailSend = (e) => {
    e.preventDefault();

    setEmailsState("sending");

    setTimeout(() => {
      // emailjs.init("vTf78WQwdX5T57SvK");
      // emailjs
      //   .send("service_kowjm9b", "template_2z6nk0p", formData)
      //   .then((response) => {
      //     console.log("SUCCESS!", response.status, response.text);
      //   })
      //   .catch((err) => {
      //     console.log("FAILED...", err);
      //   });

      setEmailsState("sent");

      soundPlay();

      setFormData({ name: "", email: "", message: "" });
    }, 3000);

    setTimeout(() => {
      setEmailsState("writting");
    }, 5000);
  };

  return (
    <form
      className="bg-test  w-container md:basis-2/5 mx-auto h-26rm rounded-md p-3 text-sm "
      onSubmit={emailSend}
    >
      <h2 className="text-center text-lg mb-6 mt-4 montserrat font-bold">
        Entre em contato
      </h2>

      <div>
        <div className="w-full md:w-11/12 md:mx-auto ">
          {/* Name */}
          <label className="font-medium block font-medium">Nome</label>
          <input
            value={formData.name}
            type="text"
            placeholder="Nome"
            className="w-full p-1 pl-2 outline-none mb-6 border-b-2 border-black bg-transparent mt-1 "
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSending}
          />
        </div>

        {/* Email */}
        <div className="w-full md:w-11/12 md:mx-auto ">
          <label className="font-medium block font-medium">Email</label>
          <input
            value={formData.email}
            type="email"
            placeholder="Email"
            className="w-full p-1 pl-2 outline-none mb-6 border-b-2 border-black bg-transparent mt-1 "
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            disabled={isSending}
          />
        </div>

        {/* Email content */}
        <textarea
          value={formData.message}
          placeholder="Como posso ajudar?"
          className="w-full md:w-11/12 md:mx-auto block max-h-32 h-32 p-2 mt-4 mb-4 border-b-2 border-black bg-white/50 outline-none"
          required
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          disabled={isSending}
        ></textarea>

        {/* Email send button */}
        <button
          className={`bg-black w-full md:w-11/12 md:mx-auto block p-2 mt-4 md:mt-9 rounded-full hover:scale-95 duration-500 ${
            isSending ? "text-neutral-400" : "text-white "
          } font-medium text-sm`}
          type="submit"
          disabled={isSending}
        >
          <img
            src={load}
            className={`w-5 inline animate-spin mr-2  ${
              isSending ? "block" : "hidden"
            }`}
          />
          <img
            src={success}
            className={`w-5 inline mr-2  ${isSent ? "block" : "hidden"}`}
          />
          Enviar email
        </button>
      </div>
    </form>
  );
}
