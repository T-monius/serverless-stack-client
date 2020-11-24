import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";

export default function NewCollaborator() {
  const history = useHistory();
  const [content, setContent] = useState("");

  function validateForm() {
    return content.length > 0;
  }

  function createCollaborator(collaboratorId) {
    return API.post("collaborators", `/collaborators`, {
      body: collaboratorId,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await createCollaborator(content);
      history.push("/");
    } catch (e) {
      onError(e);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="content">
          <Form.Control
            type="input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={false}
          disabled={!validateForm()}
        >
          Save
        </LoaderButton>
      </Form>
    </div>
  );
}