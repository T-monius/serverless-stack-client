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
    return API.post("notes", "/collaborators", {
      body: {
       collaboratorId,
      },
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
      <h2>
        Real-Time Collaboration
      </h2>
      <p>
        Collaboration in this application allows for users to view, update, and delete
        not only notes that they create on their own account but notes created by
        collaborators in the collaborator's account as well.
      </p>
      <p>
        All of a user's notes appear on the home page, and when a collaborator is added,
        your collaborators notes will appear on your home page amongst your own notes.
      </p>
      <h3>
        What's the deal with Real-Time?
      </h3>
      <p>
        Real-Time collaboration means that if you are on the home page, and one of your
        collaborators adds or deletes a note, you'll see that note appear or disappear
        without having to reload your page. The change will happen right before your
        very eyes!
      </p>
      <h3>
        Add a collaborator
      </h3>
      <p>
        If you'd like to add a collaborator, request from your collaborator their
        'collaborator id'. Once your collaborator has provided the 'collaborator id',
        Input it in the form below (under this same subheading).
      </p>
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