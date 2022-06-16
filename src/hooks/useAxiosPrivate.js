import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "./useAuth";
// import { config } from "process";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorisation"]) {
          config.headers["Authorisation"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorisation"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    axiosPrivate.interceptors.response.eject(responseIntercept);
    axiosPrivate.interceptors.request.eject(requestIntercept);
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;