import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/cjs/ClockLoader";

const override = css`
  display: block;
  margin: 20em auto;
  border-color: #00b0c7;
  color: #00b0c7;
`;

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#00b0c7");
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
    return () => (isMounted = false);
  }, []);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <ClockLoader
          color={color}
          loading={isLoading}
          css={override}
          size={150}
        />
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default PersistLogin;
