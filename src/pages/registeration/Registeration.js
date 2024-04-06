import React, { useRef, useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { projectColors } from "../../assets/colors/index";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

const Registeration = () => {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegisteration = (data) => console.log(data);

  // To reference a user's input
  // const userRef = useRef();

  // To show error
  // const errRef = useRef();

  // theme

  const [theme, setTheme] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // For name

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // For password

  const [pwd, setPwd] = useState("");
  const [userPwd, setUserPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // For valid password

  const [validPwd, seTValidPwd] = useState("");
  const [userValidPwd, setUserValidPwd] = useState(false);
  const [validPwdFocus, setValidPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  // handle userName

  // const handleUserName = () => {
  //   const result = USER_REGEX.test(user);
  //   console.log(result);
  //   console.log(user);
  //   setUser(result);
  // };

  // handle pwd

  // const handlePwd = () => {
  //   const result = PWD_REGEX.test(pwd);
  //   console.log(result);
  //   console.log(pwd);
  //   setPwd(result);

  //   const match = pwd === validPwd;
  //   setUserValidPwd(match);
  // };

  // handleTheme

  const handleTheme = () => {
    setTheme((prevState) => !prevState);
  };

  // Check user input on every render

  useEffect(() => {
    // userRef.current.Focus();
  }, []);

  // useEffect for handleUserName

  // useEffect(() => {
  //   handleUserName();
  // }, [user]);

  // useEffect for pwd

  // useEffect(() => {
  //   handlePwd();
  // }, [pwd, validPwd]);

  // for setting error

  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, pwd, validPwd]);

  return (
    <>
      <Button
        onClick={handleTheme}
        sx={{
          width: { xs: "50%", sm: "30%", md: "20%", lg: "15%" },
          display: "block",
          margin: "5% auto",
          boxShadow: "0 0 10px 0 lightgrey",
          backgroundColor: theme
            ? projectColors.lightTheme
            : projectColors.darkTheme,
          color: theme
            ? projectColors.lightThemeText
            : projectColors.darkThemeTxt,
          "&:hover": {
            backgroundColor: theme
              ? projectColors.lightTheme
              : projectColors.darkTheme,
          },
        }}
      >
        {theme ? (
          <LightModeIcon sx={{ fontSize: "15px" }} />
        ) : (
          <DarkModeIcon sx={{ fontSize: "15px" }} />
        )}
        <Box
          component={"p"}
          sx={{ display: "inline", fontSize: "15px", ml: 1 }}
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </Box>
      </Button>
      <Box
        component={"main"}
        sx={{
          width: { xs: "90%", sm: "80%", md: "50%", lg: "40%" },
          height: "50vh",
          color: theme
            ? projectColors.darkThemeTxt
            : projectColors.lightThemeText,
          backgroundColor: theme
            ? projectColors.darkTheme
            : projectColors.lightTheme,
          margin: "0 auto",
          padding: "2%",
          boxShadow: "0 0 10px 0 lightgrey",
          borderRadius: "20px",
        }}
      >
        <Box component={"section"}>
          <Box component={"p"}>{errMsg}</Box>
        </Box>
        <Box component={"form"} onSubmit={handleSubmit(handleRegisteration)}>
          {/* Username */}
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              sx={{ width: "95%" }}
              type="text"
              name="username"
              // onFocus={onFocus}
              {...register("username", {
                required: "Provide a valid username.",
                minLength: {
                  value: 4,
                  message: "Username must atleast 4 characters.",
                },
              })}
              size="small"
              variant="outlined"
              id="input-with-icon-textfield"
              label="Username"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ color: "red", textAlign: "center" }}>
              {errors?.username && errors.username.message}
            </Box>
          </Box>
          {/* <Box component="small" sx={{display:"block", color:"red"}}></Box> */}
          {/* password */}
          <FormControl
            size="small"
            sx={{ m: 1, width: "95%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                // required: "Provide a valid password.",
                // minLength: {
                //   value: 8,
                //   message: "Must must be atleast 8 characters.",
                // },
                validate: {
                  checkLength: (value) => value.length >= 8,
                  matchPattern: (value) =>
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                      value
                    ),
                },
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <Box sx={{ color: "red", textAlign: "center" }}>
              {errors.password?.type === "checkLength" && (
                <p className="errorMsg">
                  Password should be at-least 8 characters.
                </p>
              )}
              {errors.password?.type === "matchPattern" && (
                <p className="errorMsg">
                  Password should contain at least one uppercase letter,
                  lowercase letter, digit, and special symbol.
                </p>
              )}
            </Box>
          </FormControl>
          {/* Confirm password */}
          <FormControl
            size="small"
            sx={{ m: 1, width: "95%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword" // Change the name to confirmPassword
              {...register("confirmPassword", {
                required: true,
                validate: (value) => {
                  if (value !== watch("password")) {
                    return "Password does not match.";
                  }
                },
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm password"
            />
            <Box sx={{ color: "red", textAlign: "center" }}>
              {errors.confirmPassword && (
                <p className="errorMsg">{errors.confirmPassword.message}</p>
              )}
            </Box>
          </FormControl>

          <Box sx={{ m: 1 }}>
            <Button
              type="submit"
              sx={{
                width: "97%",
                backgroundColor: theme
                  ? projectColors.lightTheme
                  : projectColors.darkTheme,
                "&:hover": {
                  backgroundColor: theme
                    ? projectColors.lightTheme
                    : projectColors.darkTheme,
                },
                color: theme
                  ? projectColors.lightThemeText
                  : projectColors.darkThemeTxt,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Registeration;
