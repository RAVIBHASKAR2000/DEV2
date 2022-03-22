/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

const Login = ({setModal, modal}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (modal) {
      const closeLoginModal = e => {
        const modal = document.querySelector(".login_container_modal");
        if (modal) {
          const dimension = modal.getBoundingClientRect();
          const top = dimension.top;
          const bottom = dimension.bottom;
          const left = dimension.left;
          const right = dimension.right;
          if (
            e.clientY < top ||
            e.clientY > bottom ||
            e.clientX < left ||
            e.clientX > right
          ) {
            setModal(false)
            document.body.style.overflow = 'auto'
          }
        }
      };
      const container = document.querySelector(".login_container");
      container.addEventListener("click", closeLoginModal);
      return container.addEventListener("click", closeLoginModal);
    }
  }, [modal]);

  return (
    <div>
    {modal && <SignIn setModal = {setModal}/>}
    {/* {modal === 'register' && <SignUp setModal = {setModal}/>} */}
    </div>
  );
};

export default Login;