import React, { useRef, useState, useEffect } from "react";

const Registeration = () => {
  // const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=*[0-9])(?=.*[!@#$%]).{8, 24}$/

  // To reference a user's input
  const userRef = useRef();

  // To show error
  const errRef = useRef();

  // For name

  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [userFocus, setUserFocus] = useState("");

  // For password

  const [pwd, setPwd] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState("");

  // For valid password

  const [validPwd, serValidPwd] = useState("");
  const [userValidPwd, setUserValidPwd] = useState("");
  const [validPwdFocus, setValidPwdFocus] = useState("");

  return <div>Registeration</div>;
};

export default Registeration;
