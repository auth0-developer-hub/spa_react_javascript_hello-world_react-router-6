import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { getProtectedResource } from "../services/message-service";

export const ProtectedPage = () => {
  const [message, setMessage] = useState("");

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getProtectedResource(accessToken);

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(error.message);
      }
    };

    getMessage();
  }, [getAccessTokenSilently]);

  return (
    <div className="content-layout">
      <h1 className="content__title">Protected Page</h1>
      <div className="content__body">
        <p>
          This page retrieves a <strong>protected message</strong> from an
          external API.
          <br />
          <br />
          <strong>Only authenticated users should access this page.</strong>
        </p>
        <CodeSnippet title="Protected Message" code={message} />
      </div>
    </div>
  );
};
