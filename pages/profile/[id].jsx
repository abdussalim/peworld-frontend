import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { useState, useEffect } from "react";
import {
  GET_DETAIL_USER_FAILED,
  GET_DETAIL_USER_SUCCESS,
} from "../../redux/actions/type";
import ProfileWorker from "../../components/Profile/Worker";
import ProfileRecruiter from "../../components/Profile/Recruiter";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_APP_NAME } from "../../utils/env";
import Header from "../../components/Header";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // get api and save to redux during ssr
    try {
      const { id } = context.query;
      const token = context.req.cookies.token;

      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // withCredentials: true,
      });

      store.dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      store.dispatch({
        type: GET_DETAIL_USER_FAILED,
        payload: error.message,
      });
    }

    return {
      props: {
        token: context.req.cookies.token,
        id: context.req.cookies.id,
      },
    };
  }
);

const Profile = ({ token, id }) => {
  const router = useRouter();
  const { detailUser } = useSelector((state) => state);
  const [isProject, setisProject] = useState(true);

  useEffect(() => {
    if (router.query.tab === "experience") {
      setisProject(false);
    } else {
      setisProject(true);
    }
  }, [router.query.tab]);

  return (
    <>
      <Header
        title="Profile"
        content={`Profile page for ${NEXT_PUBLIC_APP_NAME}`}
      />
      {!detailUser.data.isError ? (
        <>
          {detailUser.data.id ? (
            <>
              {detailUser.data.role === "recruiter" ? (
                <ProfileRecruiter id={id} detailUser={detailUser} />
              ) : (
                <ProfileWorker
                  token={token}
                  id={id}
                  isProject={isProject}
                  detailUser={detailUser}
                />
              )}
            </>
          ) : (
            <h1 className="text-center mt-5">User tidak ditemukan.</h1>
          )}
        </>
      ) : (
        <h1 className="text-center mt-5">{detailUser.error}</h1>
      )}
      <br />
    </>
  );
};

Profile.layout = "Layout";

export default Profile;
