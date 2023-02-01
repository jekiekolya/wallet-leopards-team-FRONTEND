import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import authOperations from "redux/auth/authOperations";
import { authSelectors } from "redux/auth/authSelectors";
import s from "../CheckVerifyEmail/CheckVerifyEmail.module.scss";
import {ReactComponent as SuccessIcon} from "../../assets/Images/login/success.svg"
import {ReactComponent as ErrorIcon} from "../../assets/Images/login/error.svg"
import PageWrapper from "components/PageWrapper/PageWrapper";

const CheckVerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const dispatch = useDispatch();
  const param = useParams();
  const verificationToken = param.verificationToken;
  const token = useSelector(authSelectors.getToken);
  const isLoading = useSelector(authSelectors.isLoading);

  useEffect(() => {
    if (verificationToken === token) {
      dispatch(authOperations.verifyEmail({ verificationToken }))
        .then((response) => {
          const { status } = response.payload;
          if (status === "success") {
            setVerified(true);
          }
        }).catch(() => {
          setVerified(false);
        })
    }
  }, [dispatch, verificationToken, token])


  return (
    <>
      <PageWrapper>
        {verified && !isLoading &&
          <div className={s.containerCheck}>
            <SuccessIcon className={s.successIcon} />
            <div className={s.wrapper}>
              <h1 className={s.textMsg}>Email verified successfully</h1>
              <Link to="/login" className={s.link}>LOGIN</Link>
            </div>
          </div>
        }
        {(!verified && !isLoading) && (!isLoading && !token) && <div className={s.containerCheck}>
          <ErrorIcon className={s.successIcon} />
        <h1 className={s.textMsg}>404 Not Found</h1>
        </div>}
      </PageWrapper>
    </>
  )
}

export default CheckVerifyEmail;