import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import authOperations from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import { ReactComponent as SuccesIcon } from "../../assets/Images/login/success.svg";
import { ReactComponent as ErrorIcon } from "../../assets/Images/login/error.svg";
import s from "../CheckVerifyEmail/CheckVerifyEmail.module.scss";

const CheckVerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();
  const verificationToken = param.verificationToken;
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (verificationToken === token) {
      dispatch(authOperations.verifyEmail({ verificationToken }))
      .then((response) => {
        const { status } = response.payload;
        if (status === "success") {
          setVerified(true);
        }
      })
    } setVerified(false);
  }, [dispatch, verificationToken, token])


  return (
    <div className={s.back}>
      <div className={s.blur}>
        <div className={s.container}>
          {verified ?
            <div className={s.containerCheck}>
              <SuccesIcon className={s.successIcon} />
              <div className={s.wrapper}>
                <h1 className={s.textMsg}>Email verified successfully</h1>
                <Link to="/login" className={s.link}>LOGIN</Link>
              </div>
            </div>
            : <div className={s.containerCheck}>
              <ErrorIcon className={s.errorIcon}/>
              <h1 className={s.textMsg}>404 Not Found</h1>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default CheckVerifyEmail;