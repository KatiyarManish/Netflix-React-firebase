const Validation = (email, password) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isemailvalid) {
    return "Email not valid";
  }
  if (!ispasswordvalid) {
    return "Password not valid";
  }

  return null;
};
export default Validation;
