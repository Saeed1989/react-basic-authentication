import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../hooks/useToken";
import { useQueryParams } from "../../utils/useQueryParams";

export const LogInPage = () => {
  const [, setToken] = useToken();

  const [errorMessage, setErrorMessage] = useState("");

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const { token: oauthToken } = useQueryParams();

  const history = useHistory();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      history.push("/");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("/auth/google/url");
        const { url } = response.data;
        setGoogleOauthUrl(url);
      } catch (e) {
        console.log(e);
      }
    };

    loadOauthUrl();
  }, []);

  const onLogInClicked = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setToken(token);
      history.push("/");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div className="content-container" style={{ maxWidth: 512 }}>
      <h1>Log In</h1>

      {errorMessage && <div className="fail">{errorMessage}</div>}

      <hr />
      <div className="form-outline mb-4">
        <input
          className="form-control"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="someone@gmail.com"
        />
      </div>

      <div class="form-outline mb-4">
        <input
          className="form-control"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="password"
        />
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label class="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a onClick={() => history.push("/forgot-password")} href="#!">
            Forgot password?
          </a>
        </div>
      </div>

      <button
        disabled={!emailValue || !passwordValue}
        onClick={onLogInClicked}
        type="button"
        class="btn btn-primary btn-block mb-4"
      >
        Sign in
      </button>

      <div class="text-center">
        <p>
          Not a member?{" "}
          <a onClick={() => history.push("/signup")} href="#!">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};
