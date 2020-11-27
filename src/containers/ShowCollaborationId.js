import React, { useState } from "react";
import { API } from "aws-amplify";
import { onError } from "../libs/errorLib";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";

export default function ShowCollaborationId() {
  const [content, setContent] = useState("");
  const [collaborationId, setCollaborationId] = useState("");

  function validateForm() {
    return /yes/i.test(content);
  }

  function getCollaborationId() {
    return API.get("notes", "/collaborators", {
      body: "",
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let retrievedId;

    try {
      retrievedId = await getCollaborationId();
    } catch (e) {
      onError(e);
    }

    setCollaborationId(retrievedId)
  }

  return (
    <div>
      {collaborationId ? (
          <p>{collaborationId}</p>
        ) :
          (<Form onSubmit={handleSubmit}>
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
          </Form>)}
    </div>
  );
}